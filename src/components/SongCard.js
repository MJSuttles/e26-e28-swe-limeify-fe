'use client';

import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function SongCard({ songObj }) {
  return (
    <div className="row align-items-center border my-3 d-flex container" style={{ width: '70%', height: '7rem' }}>
      <div className="col">
        <img src={songObj?.album?.image} alt="Album" style={{ width: '4.25rem', height: '4.25rem' }} />
      </div>

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
            <Dropdown.Item href="">
              <Link href={`/songs/${songObj.id}`} passHref>
                Go to song
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="">Add to playlist</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

SongCard.propTypes = {
  songObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    length: PropTypes.number,
    artist: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
