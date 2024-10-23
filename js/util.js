import { COMMENT_COUNT, AVATAR_COUNT, NAMES, MESSAGES } from './data.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator();
const generateDescriptionPhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createComment() {
  return {
    id: generateCommentId(),
    avatar: 'img/avatar-' + getRandomInteger(1, AVATAR_COUNT) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}


function createPhotoDescription() {
  return {
    id: generateDescriptionPhotoId(),
    url: 'photos/' + generatePhotoId() + '.jpg',
    description: 'Моя первая фотография!',
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComment),
  };
}
const createPhotoDescriptions = (cntPhotoDescription) => {
  Array.from({ length: cntPhotoDescription }, createPhotoDescription);
};

const createThumbnail = ({ url, comments, description, likes }) => {
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const thumbnail = template.cloneNode(true);
  const imgThumbnail = thumbnail.querySelector('.picture__img');
  imgThumbnail.src = url;
  imgThumbnail.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

export { createPhotoDescriptions, createThumbnail };
