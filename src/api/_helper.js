const BASE_URL = 'https://swapi.co/api/';

export const get = (url, params = {}) => {
  return fetch(`${BASE_URL}${url}`)
  .then(response => response.json());
};