const formSubmitRef = document.querySelector(".login-form");

formSubmitRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены");
  }
  console.log({ email, password });
  event.currentTarget.reset();
  return;
}
