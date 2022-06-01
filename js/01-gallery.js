import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector(".gallery");
const galleryItemEl = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      srcset="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

galleryListEl.insertAdjacentHTML("beforeend", galleryItemEl);


const img = document.querySelector('img');
console.log(img);

galleryListEl.addEventListener("click", (event) => {
    event.preventDefault();
    
    console.log(event.target);
});


// console.log(img.getAttribute("data-source"));




// const img = document.querySelector('img[data-source]')


