function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantityDiv = document.querySelector("input");
console.log(quantityDiv);

const btnCreate = document.querySelector("[data-create]");
console.log(btnCreate);

const btnDestroy = document.querySelector("[data-destroy]");
console.log(btnDestroy);

const commonDiv = document.querySelector("#boxes");
console.log(commonDiv);

btnCreate.addEventListener("click", handelCreate);

function handelCreate() {
  const amount = quantityDiv.value;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  commonDiv.append(...boxes);
}

btnDestroy.addEventListener("click", handelDestroy);
function handelDestroy() {
  commonDiv.innerHTML = "";
}
