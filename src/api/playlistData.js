import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL PLAYLISTS
const getPlaylists = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/playlists?orderBy="uid"&equalTo="${uid}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

// GET SINGLE PLAYLIST
const getSinglePlaylist = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/playlist/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// CREATE PLAYLIST
const createPlaylist = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/playlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// PUT PLAYLIST
const updatePlaylist = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/playlist/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// DELETE PLAYLIST
const deletePlaylist = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/playlist/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getPlaylists, getSinglePlaylist, createPlaylist, updatePlaylist, deletePlaylist };
