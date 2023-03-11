// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

// console.log(SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('afterbegin', createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<a href="${original}" class="gallery__link"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
    }).join('');
}

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});