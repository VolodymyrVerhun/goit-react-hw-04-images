// import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37265508-698720a89f242e7ec4ebdb49a';

export function getImage(searchImage, page) {
  return fetch(
    `${BASE_URL}/?q=${searchImage}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
