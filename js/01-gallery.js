import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (img) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${img.original}">
          <img
            class="gallery__image"
            src="${img.preview}"
            data-source="${img.original}"
            alt="${img.description}"
          />
        </a>
      </li>`
  )
  .join("");
gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img class="modal" src="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
}
);
    


console.log(galleryItems);
// ${event.target.dataset.source}