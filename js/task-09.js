function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  let randomСolor = getRandomHexColor();
  document.body.style.backgroundColor = randomСolor;
  nameColor.textContent = randomСolor;
  console.log("nameColor:", randomСolor);
});
