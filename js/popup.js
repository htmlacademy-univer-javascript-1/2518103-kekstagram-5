import { createPhotoDescriptions } from './util';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const containerPicture = document.querySelector('.pictures');

const createPictures = createPhotoDescriptions(25);
console.log(createPictures);

const fragment = document.createDocumentFragment();

createPictures.forEach((photo) => {
  const thumbnailPhoto = templatePicture.cloneNode(true);
  const image = thumbnailPhoto.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnailPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnailPhoto.querySelector('.picture__likes').textContent = photo.likes;

  fragment.appendChild(thumbnailPhoto);
});

containerPicture.appendChild(fragment);


// export { renderThumbanils };

// const template = document.querySelector('#picture').content.querySelector('.picture');

// const createThumbnail = ({ url, comments, description, likes }) => {
//   const thumbnail = template.cloneNode(true);
//   const imgThumbnail = thumbnail.querySelector('.picture__img');
//   imgThumbnail.src = url;
//   imgThumbnail.alt = description;
//   thumbnail.querySelector('.picture__comments').textContent = comments.length;
//   thumbnail.querySelector('.picture__likes').textContent = likes;

//   return thumbnail;
// };

// const renderThumbanils = (pictures) => {
//   const fragment = document.createDocumentFragment();
//   pictures.forEach((picture) => {
//     const thumbnail = createThumbnail(picture);
//     fragment.append(thumbnail);
//   });

//   container.append(fragment);
// };

