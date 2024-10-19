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
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
        // console.warn(data);
      })
      .catch(reject);
  });

export default getSongs;
