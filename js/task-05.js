const { nameLabel, input} = {
  nameLabel: document.querySelector("#name-output"),
  input: document.querySelector("#name-input"),
};

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    nameLabel.textContent = "Anonymous";
  } else nameLabel.textContent = input.value.trim();
  console.log(" input.value:", input.value);
});

// function onInputChange(event) {
    // console.log(event.currentTarget.value)
//     refs.nameLabel.textContent = event.currentTarget.value;
// };