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
// -----

const { nameLabel, input} = {
  nameLabel: document.querySelector("#name-output"),
  input: document.querySelector("#name-input"),
};

input.addEventListener("input", () => {
  if (input.value === "") {
    nameLabel.textContent = "Anonymous";
  } else nameLabel.textContent = input.value;
  console.log(" input.value:", input.value);
});

// function onInputChange(event) {
    // console.log(event.currentTarget.value)
//     refs.nameLabel.textContent = event.currentTarget.value;
// };