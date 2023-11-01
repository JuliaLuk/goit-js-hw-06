const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

const galleryItem = document.createElement("li");
galleryItem.classList.add("gal-item");
const galleryImg = document.createElement("img");
galleryImg.classList.add("gal-img");
galleryImg.src = images.url;
galleryImg.alt = images.alt;

galleryEl.insertAdjacentElement("beforeend", galleryItem);

galleryItem.insertAdjacentElement("beforeend", galleryImg);

console.log(galleryEl);
// console.log(galleryItem);
// console.log(galleryImg);
