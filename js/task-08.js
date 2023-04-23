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