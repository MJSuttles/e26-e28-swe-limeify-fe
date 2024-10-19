'use client';

import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function SongCard({ songObj }) {
  return (
    <div className="border">
      <h1 className="my-3">Home</h1>
      <p>${songObj.name} Song Name</p>
      <p>${songObj.album.name} Album Name</p>
      <p>${songObj.artist.name} Artist Name</p>
      <p>${songObj.length} Song Length</p>
      {/* <h1 className="my-3">Home</h1>
        <p>Song Name</p>
        <p>Album Name</p>
        <p>Artist Name</p>
        <p>Song Length</p> */}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          ...
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Go to song</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Add to playlist</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

SongCard.propTypes = {
  songObj: PropTypes.shape({
    name: PropTypes.string,
    length: PropTypes.number,
    artist: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
