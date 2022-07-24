
import { galleryItems } from './gallery-items.js';
// Change code below this line

function createLinks(array) {
    return array.reduce((acc, picture) => acc + `<a class="gallery__link" href="${picture.original}">
    <img
      class="gallery__image"
      src="${picture.preview}"
      data-source="${picture.original}"
      alt="${picture.description}"
    />
  </a>` , '');
}

const collection = createLinks(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", collection);


const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery__image');
images.forEach(image => {
    image.addEventListener('click', e => {
         e.preventDefault();
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.dataset.source
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return

    lightbox.classList.remove('active')
});

