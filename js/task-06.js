const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const dataLength = Number(input.dataset.length);
  const currentValue = input.value.trim().length;
  console.log("currentValue:", currentValue);

  input.classList.add("invalid");

  if (currentValue === dataLength) {
    input.classList.replace("invalid", "valid");
  }
});
