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
// ----

const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let currentValue = 0;

decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
  console.log(`Текущее значение: ${currentValue}`);
});