'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Dropdown } from 'react-bootstrap';
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
    <div className="view-playlist-page my-3">
      <div className="d-flex flex-row my-5 artist-info">
        <img src={playlist?.image} alt="Playlist Cover" className="col-4" />
        <div className="col-8">
          <h1>{playlist?.name}</h1>
          <h6>{playlist?.category?.name}</h6>
        </div>
      </div>

      <div className="songs">
        <h2 className="my-5">Songs</h2>
        {playlist?.songs?.map((song) => (
          <>
            <SongCard key={song.id} songObj={song} />

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

            <hr />
          </>
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
