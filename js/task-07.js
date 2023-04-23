const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
// -----

const sizeControle = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControle.addEventListener("input", () => {
  text.style.fontSize = `${sizeControle.value}px`;

  const computedStyle = window.getComputedStyle(text);
  const fontSize = computedStyle.fontSize;
  console.log(`Размер текста: ${fontSize}`);
});