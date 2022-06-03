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

galleryListEl.addEventListener("click", modalShow); 

function modalShow(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  
  if (!isGalleryImage) {
    return;
  }
  
  const modalWindow = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">
  `, {
    onShow: () => window.addEventListener("keydown", onCloseEscape),
    onClose: () => window.removeEventListener("keydown", onCloseEscape),
  });
  
  modalWindow.show();
}

function onCloseEscape(event) {
  if (event.code === "Escape") {
    modalWindow.onClose();
  }
}
