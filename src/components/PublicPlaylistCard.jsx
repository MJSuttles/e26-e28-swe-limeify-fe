/* eslint-disable @next/next/no-img-element */

'use client';

import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

export default function PublicPlaylistCard({ playlistObj }) {
  return (
    <div className="border my-3">
      <img src={playlistObj.image} alt="playlist" style={{ width: '10rem', height: '10rem' }} />
      {/* <Image src={playlistObj.image} alt="playlist" height={400} width={400}/> */}
      <p>{playlistObj.name}</p>
      <p>{playlistObj.categoryId}</p>
      <div className="col">
        <Link href={`/playlists/${playlistObj.id}`}>View Playlist</Link>
      </div>
    </div>
  );
}

PublicPlaylistCard.propTypes = {
  playlistObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
