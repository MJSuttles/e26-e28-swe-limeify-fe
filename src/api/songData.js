import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSongs = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/songs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.warn(data);
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const getSingleSong = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/songs/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.warn(data);
        if (data) {
          resolve(data);
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const searchSong = (query) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/songs/search?searchValue=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch('Rejected! Error: ', reject);
  });

export { getSongs, getSingleSong, searchSong };
