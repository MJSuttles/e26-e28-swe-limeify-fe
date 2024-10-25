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
      <Link href={`/playlists/edit/${playlistObj.id}`} passHref>
        Edit
      </Link>
    </div>
  );
}

PlaylistCard.propTypes = {
  playlistObj: PropTypes.shape({
    name: PropTypes.string,
    categoryId: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
