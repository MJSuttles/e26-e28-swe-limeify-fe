import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL PLAYLISTS
const getPlaylists = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/playlists`, {
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
    fetch(`${endpoint}/api/playlists/${id}`, {
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
    fetch(`${endpoint}/api/playlists`, {
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
    fetch(`${endpoint}/api/playlists/${payload.id}`, {
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
    fetch(`${endpoint}/api/playlists/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// ADD SONG TO PLAYLIST
const addSongToPlaylist = async (songId, playlistId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${endpoint}/api/songs/${songId}/add-to-playlist/${playlistId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(payload), // Uncomment if there's a payload
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { getPlaylists, getSinglePlaylist, createPlaylist, updatePlaylist, deletePlaylist, addSongToPlaylist };
