import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector(".gallery");
const galleryItemEl = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

galleryListEl.insertAdjacentHTML("beforeend", galleryItemEl);

galleryListEl.addEventListener("click", (event) => {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }
  console.log(event.target.dataset.source)
    
  const instance = basicLightbox.create(`
   <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">
  `);
  instance.show();
});

