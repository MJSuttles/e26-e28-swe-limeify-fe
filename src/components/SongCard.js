'use client';

import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function SongCard({ songObj }) {
  return (
    <div className="border my-3 d-flex container row">
      <div className="col">
        <p>{songObj.name}</p>
      </div>
      <div className="col">
        <p>{songObj.album.name}</p>
      </div>
      <div className="col">
        <p>{songObj.artist.name}</p>
      </div>
      <div className="col">
        <p>{songObj.length}</p>
      </div>
      <div className="col">
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
