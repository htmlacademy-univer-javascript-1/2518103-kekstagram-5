const container = document.querySelector('.pictures');

const template = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ url, comments, description, likes }) => {
  const thumbnail = template.cloneNode(true);
  const imgThumbnail = thumbnail.querySelector('.picture__img');
  imgThumbnail.src = url;
  imgThumbnail.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const renderThumbanils = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export { renderThumbanils };
