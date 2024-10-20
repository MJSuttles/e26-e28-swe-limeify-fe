'use client';

import PropTypes from 'prop-types';
import React from 'react';

export default function PlaylistCard({ playlistObj }) {
  return (
    <div className="border my-3">
      <p>{playlistObj.name}</p>
      <p>{playlistObj.categoryId}</p>
    </div>
  );
}

PlaylistCard.propTypes = {
  playlistObj: PropTypes.shape({
    name: PropTypes.string,
    categoryId: PropTypes.string,
  }).isRequired,
};
