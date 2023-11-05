const number = document.querySelector("#value");
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="increment"]');

const incrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener("click", function () {
  counterValue += 1;
  number.textContent = counterValue;
  console.log("klick on plus");
});

incrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  number.textContent = counterValue;
  console.log("klick on minus");
});

console.log(number);
console.log(decrementBtn);
console.log(incrementBtn);
