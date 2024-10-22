'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleSong } from '../../../api/songData';

export default function ViewSong({ params }) {
  const { id } = params;

  const [song, setSong] = useState({});

  useEffect(() => {
    getSingleSong(id).then(setSong);
  }, [id]);

  return (
    <div className="border-1 text-center">
      <div className="song-info">
        {/* TODO: Add an image here for the song */}
        <h2>{song.name}</h2>
        {/* <p>{song.album.name}</p>
        <p>{song.genre.name}</p> */}
        <p>Song length</p>
      </div>

      <div className="artist-info">
        {/* TODO: add an image here for the artist */}
        <h2>Artist</h2>
        <p>Artist Name</p>
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
