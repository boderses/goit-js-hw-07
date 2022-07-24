import { galleryItems } from './gallery-items.js';
// Change code below this line

function createLinks(array) {
    return array.reduce((acc, picture) => acc + `<a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
</a>`, '');
}

const collection = createLinks(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", collection);


let ligthbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt", showCounter: false});
gallery.on('show.simplelightbox');
