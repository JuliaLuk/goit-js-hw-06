const userInput = document.querySelector("#validation-input");
// console.log(userInput);

const dataLength = userInput.getAttribute("data-length");
// console.log(dataLength);

userInput.addEventListener("blur", handelBlur);
function handelBlur(event) {
  const userName = event.currentTarget.value;
  if (userInput.value.length >= Number(dataLength)) {
    userInput.classList.add("valid");
    userInput.classList.remove("invalid");
    // alert(`Hello ${userName}`);
  } else {
    userInput.classList.add("invalid");
    userInput.classList.remove("valid");
    // alert(`Ups ${userName}`);
  }

  //   console.log(userName);
}
