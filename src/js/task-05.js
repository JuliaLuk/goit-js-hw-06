const userName = document.querySelector("#name-input");
// console.log(userName);

const helloText = document.querySelector("#name-output");
// console.log(helloText);

userName.addEventListener("input", (event) => {
  let input = event.currentTarget.value.trim();
  if (input === "") {
    helloText.textContent = "Anonymous";
  } else {
    helloText.textContent = input;
  }
});
