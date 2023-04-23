const sizeControle = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${sizeControle.value}px`;

sizeControle.addEventListener("input", () => {
  text.style.fontSize = `${sizeControle.value}px`;

  const computedStyle = window.getComputedStyle(text);
  const fontSize = computedStyle.fontSize;
  console.log(`Размер текста: ${fontSize}`);
});
