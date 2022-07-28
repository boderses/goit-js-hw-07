
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGallery(galleryItems) {
    return galleryItems.map(galleryItem => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img
                class="gallery__image"
                src="${galleryItem.preview}"
                data-source="${galleryItem.original}"
                alt='${galleryItem.description}'
            />
            </a>
        </div>
    `;
    }).join("");
}
 
function onGalleryContainerClick(event) {
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();
    const urlOfOriginalImage = event.target.dataset.source;

    createModalWithOriginalImage(urlOfOriginalImage);
}

function createModalWithOriginalImage(url) {

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${url}" width="1280">
    </div>
    `, {
        onShow: (instance) => {
            document.addEventListener("keydown", function onEscape(e) {

                if (e.code === "Escape") {
                    instance.close();
                    document.removeEventListener("keydown", onEscape);
                    }
            })
        }
    })
    
    instance.show();
}