let counterValue = document.querySelector("#value");
counterValue = 0;

const decrementBtn = document.querySelector("dataset.action.decrement");

const incrementBtn = document.querySelector("dataset.action.increment");

decrementBtn.addEventListener("click", (counterValue = counterValue + 1));

incrementBtn.addEventListener("click", counterValue - 1);

console.log(counterValue);
console.log(decrementBtn);
console.log(incrementBtn);
