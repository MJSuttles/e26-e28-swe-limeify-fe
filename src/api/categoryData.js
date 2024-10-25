import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCategories = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/categories`, {
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

export default getCategories;
