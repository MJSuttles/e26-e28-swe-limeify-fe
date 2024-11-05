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

// GET PRIVATE PLAYLISTS
const getPrivatePlaylists = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/user/${uid}/playlists`, {
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
      })
      .catch(reject);
  });

// GET PUBLIC PLAYLISTS
// TODO: Figure out how to structure the query parameters
const getPublicPlaylists = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/playlists/public/?isPublic=true`, {
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
      })
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
      .then((response) => response.json)
      .then((data) => resolve(data))
      .catch(reject);
  });

// ADD SONG TO PLAYLIST
const addSongToPlaylist = async (songId, playlistId, payload) => {
  try {
    const response = await fetch(`${endpoint}/api/songs/${songId}/add-to-playlist/${playlistId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error adding song to playlist:', error);
    throw error;
  }
};

// DELETE SONG FROM PLAYLIST
const deleteSongFromPlaylist = async (songId, playlistId) => {
  const response = await fetch(`${endpoint}/api/songs/${songId}/remove-from-playlist/${playlistId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(`HTTP error ${response.status}: ${errorData.error || response.statusText}`);
  }
};

export { getPlaylists, getPublicPlaylists, getSinglePlaylist, createPlaylist, updatePlaylist, deletePlaylist, addSongToPlaylist, deleteSongFromPlaylist, getPrivatePlaylists };
