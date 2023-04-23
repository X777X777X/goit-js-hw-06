function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanRef = document.querySelector(".color");
const buttonChangeRef = document.querySelector(".change-color");

buttonChangeRef.addEventListener("click", onButtonChangeRef);

function onButtonChangeRef() {
  let randomСolor = getRandomHexColor();
  document.body.style.backgroundColor = randomСolor;
  spanRef.textContent = randomСolor;
}
