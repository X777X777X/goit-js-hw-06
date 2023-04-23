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
// -------

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email;
  const password = form.elements.password;

  if (!email.value || !password.value) {
    alert("Все поля формы должны быть заполнены.");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);

    form.reset();
  }
}