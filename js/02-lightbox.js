import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
    .map((img) =>
            `<li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
    </li>`
    )
  .join("");
gallery.innerHTML = galleryMarkup;
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
 });
gallery.addEventListener('click', () => {
    lightbox
})
console.log(galleryItems);
// ${event.target.dataset.source}
