function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
// console.log(changeBtn);
const nameColor = document.querySelector(".color");
// console.log(nameColor);

changeBtn.addEventListener("click", handelChange);

function handelChange(event) {
  if (event) {
    document.body.style.backgroundColor = getRandomHexColor();

    nameColor.textContent = getRandomHexColor();
  }
}
