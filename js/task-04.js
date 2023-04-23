const counterValueRef = document.querySelector("#value");

let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

decrementBtnRef.addEventListener("click", onDecrementCounterBtn);
incrementBtnRef.addEventListener("click", onIncrementCounterBtn);

function onDecrementCounterBtn() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}
function onIncrementCounterBtn() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
