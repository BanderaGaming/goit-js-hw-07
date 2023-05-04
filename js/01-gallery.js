import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMaker = () => {
    galleryItems.forEach(img =>
        gallery.insertAdjacentHTML("afterbegin",
            `<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" data-source="${img.original}" scr="${img.preview}" alt="${img.description}"></a></li>`)
    );
};

gallery.addEventListener("click", (event) => {
    if (event.target.nodeName !== "A") {
        return;
    }

}   
);
console.log(_.add(3,4) )
galleryMaker()
console.log(galleryItems);
