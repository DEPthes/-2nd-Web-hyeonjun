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