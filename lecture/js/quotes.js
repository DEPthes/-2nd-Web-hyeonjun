const quotes = [
    {
        quote: "The way to get started is to quit talking and begin",
        author: "Walt Disney",
    },
    {
        quote: "함께 있는 순간이 당연해서 귀한 줄 몰랐어. 모두 순간은 선물이었는데, 그래서 난 결심했어. 더이상 후회로 나의 지금을 채우지 않기로.",
        author: "한지평",
    },
    {
        quote:"저요, 그런 악플들 신경 안씁니다. 누가 그러더라고요 무관심은 세상 하찮은 것들에게 하는 복수라고. 그래서 신경 끊었어요, 복수하려고.",
        author: "명대사",
    },
    {
        quote:"다른 사람의 의견이 너의 현실이 될 필요는 없다.",
        author: "한지평",
    },
    {
        quote:"달미야, 넌 코스모스야. 아직 봄이잖아. 천천히 기다리면 가을에 가장 예쁘게 필 거야. 그러니까 너무 초조해하지 마.",
        author: "명대사",
    },
    {
        quote:"아주 가끔 헤매보는 것도 괜찮겠다. 아주 가끔 지도 없는 항해를 떠나보는 것도 근사하겠다.",
        author: "3회 스타트업 명대사",
    },
    {
        quote:"진짜 인정하면, 걱정말고 격려해줘.",
        author: "한지평",
    },
    {
        quote:"별거 일 수 있죠. 나한테 당연한 게 남한텐 귀할 수도 있고.",
        author: "한지평",
    },
    {
        quote:"선을 지키는 겁니다. 지금 제가 이걸 받으면 투자가 아니라, 적선이 돼 버려요.",
        author: "한지평",
    },
    {
        quote:"후회는 선택하는 순간에 오진 않잖아요, 과정에서 오지. 난요, 내 선택을 단 한 번도 후회해 본 적이 없어요. 기를 쓰고 그렇게 만들었거든.",
        author: "한지평",
    }
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;