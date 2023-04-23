const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);

  if (event.currentTarget.value === "") {
    spanRef.textContent = "Anonymous";
  }
  spanRef.textContent = event.currentTarget.value;
}
