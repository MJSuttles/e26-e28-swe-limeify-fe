'use client';

import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

export default function PlaylistCard({ playlistObj }) {
  return (
    <div className="border my-3">
      <img src={playlistObj.image} alt="playlist" style={{ width: '10rem', height: '10rem' }} />
      <p>{playlistObj.name}</p>
      <p>{playlistObj.categoryId}</p>
      <Link href={`/playlists/edit/${playlistObj.id}`}>Edit</Link>
      <div className="col">
        <Link href={`/playlists/${playlistObj.id}`}>View Playlist</Link>
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
};
