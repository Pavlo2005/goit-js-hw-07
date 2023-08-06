import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// console.log(basicLightbox);

function createPicture(arr) {
    return arr.map(({ preview, original, description }) => `<li data-source="${original}" class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
}

let instance = basicLightbox.create(``);;

gallery.insertAdjacentHTML('beforeend', createPicture(galleryItems));

gallery.addEventListener('click', handlerPictureClick);

function handlerPictureClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
      return;
  }
  
  console.log(evt.target);

  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt="">
`);

  instance.show();
}

document.addEventListener('keydown', handlerKeydown);

function handlerKeydown(evt) {
  if (evt.code === 'Escape' || basicLightbox.visible()) {
    instance.close();
  }
}