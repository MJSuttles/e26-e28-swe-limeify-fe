'use client';

import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { getPlaylists, addSongToPlaylist } from '../../api/playlistData';
import { useAuth } from '../../utils/context/authContext';
// Initial form state
const initialFormState = {
  name: '',
};
export default function SongToPlaylistForm({ obj = initialFormState }) {
  // Grab the authenticated user and initialize router
  const { user } = useAuth();
  const router = useRouter();
  // Set up component state
  const [formData, setFormData] = useState(obj);
  const [playlists, setPlaylists] = useState([]);
  // Fetch playlists on mount and when obj or user changes
  useEffect(() => {
    getPlaylists().then(setPlaylists);
    if (obj.id) setFormData(obj);
  }, [obj, user]);
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addSongToPlaylist(formData).then(() => router.push('/playlists'));
  };
  return (
    <div className="d-flex flex-column align-items-center my-4" id="add-song-to-playlist">
      <h1 className="my-5">Add to Playlist</h1>
      <Form onSubmit={handleSubmit} className="text-center" style={{ width: '50%' }}>
        {/* Playlist Selection */}
        <Form.Group className="mb-3">
          <Form.Label>To which playlist would you like to add this</Form.Label>
          <Form.Select onChange={handleChange} aria-label="Playlist" name="name" className="mb-3" value={formData.name || ''} required>
            <option value="">Select ...</option>
            {/* Map over playlists for options */}
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.name}>
                {playlist.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </Form>
    </div>
  );
}
SongToPlaylistForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
  }),
};
