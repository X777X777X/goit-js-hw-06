const inputRef = document.querySelector("#validation-input");
const maxLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onInputBlurValid);

function onInputBlurValid() {
  inputRef.classList.add("invalid");
  if (inputRef.value.length === maxLength) {
    inputRef.classList.replace("invalid", "valid");
  }
}
