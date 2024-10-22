'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleSong } from '../../../api/songData';

export default function ViewSong({ params }) {
  const [song, setSong] = useState({});

  const { id } = params;

  useEffect(() => {
    getSingleSong(id).then(setSong);
  }, [id]);

  return (
    <div className="text-center my-3">
      <h1>Song Detail</h1>
      <div className="my-5 song-info">
        {/* TODO: Add an image here for the song */}
        <h2>{song.name}</h2>
        <p>{song.album.name}</p>
        <p>{song.genre.name}</p>
        <p>{song.length}</p>
      </div>

      <div className="my-5 artist-info">
        {/* TODO: add an image here for the artist */}
        <h2>Artist</h2>
        <p>{song.artist.name}</p>
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
