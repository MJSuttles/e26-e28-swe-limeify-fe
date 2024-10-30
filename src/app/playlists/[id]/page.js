'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Dropdown } from 'react-bootstrap';
import { deleteSongFromPlaylist, getSinglePlaylist } from '../../../api/playlistData';

export default function ViewPlaylist({ params }) {
  const [playlist, setPlaylist] = useState(null);
  const { id } = params;

  const refreshPlaylist = () => {
    getSinglePlaylist(id).then(setPlaylist);
  };

  useEffect(() => {
    refreshPlaylist();
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
    <div className="text-center my-3">
      <h1>Playlist Detail</h1>
      <div className="my-5 artist-info">
        <p>{playlist?.name}</p>
        <img src={playlist?.image} alt="Playlist Cover" />
      </div>

      <div>
        <h2>Songs</h2>
        {playlist?.songs?.map((song) => (
          <div key={song.id}>
            <p>{song.name}</p>
            <img src={song.album.image} alt="Song Cover" />
            <p>{song.album.name}</p>
            <p>{song.artist.name}</p>
            <p>{song.length}</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                ...
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link href={`/playlists/${playlist.id}`} passHref>
                    Go to playlist
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleDelete(song.id, playlist.id)}>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
