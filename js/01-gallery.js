import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');
const galleryItemEl = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryItemEl);

galleryListEl.addEventListener('click', modalShow);

function modalShow(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains('gallery__image');

  if (!isGalleryImage) {
    return;
  }

  const modalWindow = basicLightbox.create(`
  <img src="${event.target.dataset.source}">
  `);
  modalWindow.show();

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      modalWindow.close();
    }
  });
}
