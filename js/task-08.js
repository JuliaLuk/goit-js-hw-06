const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", handelSubmit);
function handelSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value || password.value.length < 6) {
    alert(
      "всі поля повинні бути заповнені i password має мати мінімум 6 символів"
    );
    return;
  }
  const formInfo = {
    "User email": email.value,
    "User password": password.value,
  };
  console.log(formInfo);
  form.reset();
}

//   console.log(email.value);
//   console.log(password.value);
//   console.dir(event.currentTarget);
