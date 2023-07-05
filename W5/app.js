const input = document.querySelector(".result");
const input2 = document.querySelector(".ten");


function increase() {
  input2.innerText = parseInt(input.value) + parseInt(input2.innerText);
}

function decrease() {
  if (parseInt(input2.innerText) - parseInt(input.value) >= 0 ){
  input2.innerText = parseInt(input2.innerText) - parseInt(input.value)
}else {
  alert("0이 최소값입니다.");
}
}

document.querySelector(".minus").addEventListener("click", decrease);
document.querySelector(".plus").addEventListener("click", increase);