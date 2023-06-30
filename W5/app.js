let value = 0;

function increase() {
  value++;
  document.querySelector(".result").textContent = value;
}

function decrease() {
    if (value === 0 ) {
        alert("0이 최소값입니다.");
    }
    else if (value > 0) {
  value--;
  document.querySelector(".result").textContent = value;}
}