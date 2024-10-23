'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlaylistForm from '../../../../components/forms/PlaylistForm';
import { getSinglePlaylist } from '../../../../api/playlistData';

export default function EditPlaylist({ params }) {
  const { id } = params;
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getSinglePlaylist(id).then(setFormData);
  }, [id]);

  return (
    <div>
      <PlaylistForm obj={formData} />
    </div>
  );
}

EditPlaylist.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
