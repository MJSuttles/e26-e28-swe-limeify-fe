'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { deleteSongFromPlaylist, getSinglePlaylist } from '../../../api/playlistData';
import SongCard from '../../../components/SongCard';

export default function ViewPlaylist({ params }) {
  const [playlist, setPlaylist] = useState(null);
  const { id } = params;

  const refreshPlaylist = () => {
    getSinglePlaylist(id).then(setPlaylist);
  };

  useEffect(() => {
    refreshPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleDelete = (songId, playlistId) => {
    if (window.confirm(`Delete song from playlist?`)) {
      deleteSongFromPlaylist(songId, playlistId).then(() => {
        console.log(`Song ${songId} was deleted from the playlist.`);
        refreshPlaylist();
      });
    }
  };

  return (
    <div className="container view-playlist-page my-3">
      <div className="d-flex flex-row my-5 artist-info">
        <img src={playlist?.image} alt="Playlist Cover" className="col-4" />
        <div className="col-8">
          <h1>{playlist?.name}</h1>
          <h6>{playlist?.category?.name}</h6>
        </div>
      </div>

      <div className="songs-section row">
        <h2 className="my-5">Songs</h2>
        {playlist?.songs?.map((song) => (
          <div className="row">
            <SongCard className="song-cards-view-playlist-page" key={song.id} songObj={song} />

            <svg onClick={() => handleDelete(song.id, playlist.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>

            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

ViewPlaylist.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
