const inputRef = document.querySelector("#validation-input");
const maxLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onInputBlurValid);

function onInputBlurValid() {
  inputRef.classList.add("invalid");
  if (inputRef.value.length === maxLength) {
    inputRef.classList.replace("invalid", "valid");
  }
}
// -------

const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const dataLength = input.getAttribute("data-length");
  const currentValue = input.value.length;

  console.log("currentValue:", currentValue);
  console.log("dataLength:", dataLength);

  if (currentValue == dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});