//all
function updateRemainingCards() {
    const totals = String(totalAttempts);
    total.innerText = `총 시도:${totals}`;
    const setss = String(divide);
    sets.innerText = `남은 쌍:${setss}`;

    // 업데이트할 남은 카드 개수를 화면에 표시하는 로직을 구현하세요.
}

//settingJS
if (document.getElementById("num")) {                           //num 있을떄만 작동시키기
    const numInput = document.getElementById("num");   
    const startButton = document.getElementById("start");

    startButton.addEventListener('click', calculate);

    function calculate() {
        const num = parseInt(numInput.value);
        if (num > 0 && num <= 20) {
            localStorage.setItem("sharedValue", num);                       //sharedValue라는 이름으로 숫자를 uumInput값을 저장시키기 
            window.location.href = "../cardDisplay/main.html";                  // main.html 이동
        }
        else{
            alert("최소1 이상 최대 20이하를 입력하세요")
        }
    }
}
else {
    const saveNum = localStorage.getItem("sharedValue");                    // 저장된 데이터 끌어다가 쓰기 
    if (saveNum) {
        const cardContainer = document.getElementById("cardContainer");            
        const numbers = generateNumbers(saveNum);
        const shuffledCards = shuffle(numbers);
        const totalCards = saveNum * 2;                             //쌍이니까 곱하기 
        let firstCard = null;                       // 첫번째 값은 널값
        let totalAttempts = 0;                          //처음 시도는 ㅇ
        let remainingCards = totalCards;                
        const total = document.querySelector("h1#total");
        const sets = document.querySelector("h2#sets");
        let divide = remainingCards / 2 ;                       //쌍 구하는 공식

        for (let i = 0; i < totalCards; i++) {     //i라는 변수 기본값 0 이며 i가 총 카드를 초과하기 전 까지 계속 변수에 1씩 더 해라 (반복문) (관례상 배열 인덱스는 0으로 시작함
            const card = document.createElement("div");         // html ---> div에다가 넣기
            card.classList.add("card");                             // card라는 클래스 추가
            card.dataset.number = shuffledCards[i];                         //dataset 에 있는 number에다가 셔플카드 변수 i 넣기
            card.addEventListener('click', handleCardClick);
            cardContainer.appendChild(card);                            // cardContainer ---> card 
        }

        function generateNumbers(saveNum) {
            const numbers = [];
            for (let i = 1; i <= saveNum; i++) {
                numbers.push(i);
                numbers.push(i);
            }
            return numbers;
        }

        function shuffle(array) {
            return array.slice().sort(() => Math.random() - 0.5);
        }

        function handleCardClick() {
            const currentCard = this;                       // 자체 구문

            if (currentCard.classList.contains('matched')) {                    // 이미 고른거 일시 아무 활동 x
                return;
            }

            if (firstCard === null) {
                firstCard = currentCard;
                showCardNumber(currentCard);
            } else {
                totalAttempts++;
                updateRemainingCards();
                showCardNumber(currentCard);

                setTimeout(() => {
                    if (currentCard.dataset.number === firstCard.dataset.number) {
                        currentCard.classList.add('matched');
                        firstCard.classList.add('matched');
                        divide -= 1;
                        if (divide === 0 ){
                            alert(`축하합니다.무려 ${totalAttempts}번 만에 게임을 끝내셨군요!`);
                        }
                        updateRemainingCards();
                    } else {
                        updateRemainingCards();
                        hideCardNumber(currentCard);
                        hideCardNumber(firstCard);
                    }

                    firstCard = null;
                }, 1000);
            }
        }

        function showCardNumber(card) {
            card.innerHTML = card.dataset.number;
        }

        function hideCardNumber(card) {
            card.innerHTML = '';
        }

        function updateRemainingCards() {
            const totals = String(totalAttempts);
            total.innerText = `총 시도:${totals}`;
            const setss = String(divide);
            sets.innerText = `남은 쌍:${setss}`;
 
            // 업데이트할 남은 카드 개수를 화면에 표시하는 로직을 구현하세요.
        }
        updateRemainingCards();
    } else {
        window.location.href = "../cardSetting/setting.html";
    }
}
//부모.innerHtml ="";
//const nums = 카드에 적힌 숫자가 모두 들어있는 array   
//const ui = nums.map(num => 카드 N장 ui) // 이렇게 하면 nums 배열은 수정되지 않습니다.
//부모.appendChild(ui);