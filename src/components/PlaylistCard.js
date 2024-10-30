'use client';

import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { Dropdown } from 'react-bootstrap';
import { deletePlaylist } from '../api/playlistData';

// import Image from 'next/image';

export default function PlaylistCard({ playlistObj, onUpdate }) {
  const deletePlaylistFromView = () => {
    if (window.confirm(`Delete ${playlistObj.name}?`)) {
      console.warn('Delete event triggered!');
      deletePlaylist(playlistObj.id).then(() => {
        onUpdate();
      });
    }
  };

  return (
    <div className="border my-3">
      <img src={playlistObj.image} alt="playlist" style={{ width: '10rem', height: '10rem' }} />
      {/* <Image src={playlistObj.image} alt="playlist" height={400} width={400}/> */}
      <p>{playlistObj.name}</p>
      <p>{playlistObj.categoryId}</p>
      <Link href={`/playlists/edit/${playlistObj.id}`}>Edit</Link>
      <div className="col">
        <Link href={`/playlists/${playlistObj.id}`}>View Playlist</Link>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">
              <Link href={`/playlists/${playlistObj.id}`} passHref>
                Go to playlist
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={deletePlaylistFromView}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

PlaylistCard.propTypes = {
  playlistObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
