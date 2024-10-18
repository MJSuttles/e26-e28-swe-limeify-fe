'use client';

import React from 'react';
import { Dropdown } from 'react-bootstrap';
// import PropTypes from 'prop-types';

export default function SongCard() {
  return (
    <>
      {/* <h1 className="my-3">Home</h1>
      <p>${songObject.name} Song Name</p>
      <p>${songObject.} Album Name</p>
      <p>${songObject.} Artist Name</p>
      <p>${songObject.length} Song Length</p>
      <button type="button" className="btn btn-primary">
        ...
      </button> */}
      <h1 className="my-3">Home</h1>
      <div className="border">
        <p>Song Name</p>
        <p>Album Name</p>
        <p>Artist Name</p>
        <p>Song Length</p>
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
    </>
  );
}

// SongCard.propTypes = {
//   songObject: PropTypes.shape({
//     name: PropTypes.string,
//     length: PropTypes.number,
//   }).isRequired,
// };
