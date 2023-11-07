const slider = document.querySelector("#font-size-control");
// console.log(slider);

const sliderText = document.querySelector("#text");
// console.log(sliderText);

slider.addEventListener("input", () => {
  sliderText.style.fontSize = `${slider.value}px`;
});
