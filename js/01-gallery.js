import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => {
	return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`}).join('');

galleryBox.insertAdjacentHTML('afterbegin', markup);


function handleGalleryOpen (event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return
	}

	const selectedImg = event.target.dataset.source;

	const instance = basicLightbox.create(`
    <img src=${selectedImg} width="800" height="600">`)

instance.show()
}

galleryBox.addEventListener("click", handleGalleryOpen);
console.log(galleryItems);
 
