/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleSong } from '../../../api/songData';

export default function ViewSong({ params }) {
  // Set the initial state to null or else you will run into a runtime error. There's a chance
  // the nested data is undefined (the returned data from the API call might not fire off before
  // initial render).
  const [song, setSong] = useState(null);

  const { id } = params;

  useEffect(() => {
    getSingleSong(id).then(setSong);
  }, [id]);

  return (
    <div className="text-center my-3">
      <h1>Song Detail</h1>
      <div className="my-5 song-info">
        {/* TODO: Add an image here for the song */}
        <img src={song?.album?.image} alt="Album cover." />
        {/* 
          Add ? before the period. This is called an optional chaining operator. Without it
          you might run into runtime errors.
          
          According to MDN, the object's properties we are trying
          to access will instead evaluate to undefined instead of throwing errors.

          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        */}
        <h2>{song?.name}</h2>
        <p>{song?.album.name}</p>
        <p>{song?.genre.name}</p>
        <p>{song?.length}</p>
      </div>

      <div className="my-5 artist-info">
        <img src={song?.artist?.image} alt="Artist" style={{ width: '40%', height: '40%' }} />
        <h2>Artist</h2>
        <p>{song?.artist?.name}</p>
      </div>

      <button className="btn btn-primary" type="button">
        Add to playlist
      </button>
    </div>
  );
}

ViewSong.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
