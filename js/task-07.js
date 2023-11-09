const slider = document.querySelector("#font-size-control", "range");
console.log(slider);

const sliderText = document.querySelector("#text");
// console.log(sliderText);
sliderText.style.fontSize = `${slider.value}px`;
slider.addEventListener("input", () => {
  sliderText.style.fontSize = `${slider.value}px`;
});
