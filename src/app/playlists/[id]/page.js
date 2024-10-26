'use client';

import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getSinglePlaylist } from '../../../api/playlistData';

export default function ViewPlaylist({ params }) {
  // Set useState
  const [playlist, setPlaylist] = useState(null);

  const { id } = params;

  useEffect(() => {
    getSinglePlaylist(id).then(setPlaylist);
  }, [id]);

  return (
    <div className="text-center my-3">
      <h1>Playlist Detail</h1>
      <div className="my-5 artist-info">
        {/* 
          Add ? before the period. This is called an optional chaining operator. Without it
          you might run into runtime errors.
          
          According to MDN, the object's properties we are trying
          to access will instead evaluate to undefined instead of throwing errors.

          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        */}
        <p>{playlist?.name}</p>
        {/* <img src={playlist?.image} alt="Playlist Image" /> */}
        <p>{playlist?.song?.name}</p>
        <p>{playlist?.song?.album?.name}</p>
        <p>{playlist?.song?.artist?.name}</p>
        <p>{playlist?.song?.length}</p>
      </div>

      <Link href={`/playlists/edit/${id}`} passHref>
        Edit
      </Link>
    </div>
  );
}

ViewPlaylist.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
