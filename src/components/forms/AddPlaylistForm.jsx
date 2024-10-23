'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../utils/context/authContext';
import { createPlaylist, updatePlaylist } from '../../api/playlistData';

const initialFormState = {
  name: '',
  image: '',
  categoryId: '',
};
export default function AddPlaylistForm({ obj = initialFormState }) {
  // Step one - set an initial state for the form.

  // Step two - Set initialFormState as the default parameter. Grab the useAuth hook. Set a useState inside AuthorForm. Initialize router object.
  const [formData, setFormData] = useState(obj);
  // console.warn(formData);
  const { user } = useAuth();
  const router = useRouter();

  // Step three - useEffect
  useEffect(() => {
    if (obj.id) setFormData(obj);
  }, [obj, user]);

  // Step four - handleChange. This will be used as a callback function.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Step five - handleSubmit.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      // TODO: Use router to send the user to the playlist they just created. Requires an API call to the backend to create a playlist, push payload to the BE.
      updatePlaylist(formData).then(() => router.push(`/playlists/${obj.id}`));
    } else {
      // New Payload? Push the payload to the BE, update/patch payload with the id key that BE would return.
      const payload = { ...formData, uid: user.uid };
      // Monitor what happens when sending payloads as a PUT request in Postman.
      createPlaylist(payload).then(({ name }) => {
        const patchPayload = { id: name };
        updatePlaylist(patchPayload).then(() => {
          router.push('/playlists');
        });
      });
    }
  };

  return (
    <div className="d-flex flex-column align-items-center my-4" id="add-update-playlist">
      <h1 className="my-5">Add Playlist</h1>

      <Form onSubmit={handleSubmit} className="text-center" style={{ width: '50%' }}>
        {/* TODO: Each Form.Control needs an onChange attribute. Pass in handleChange as a callback. */}

        {/* PLAYLIST NAME INPUT */}
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control type="textbox" placeholder="name of playlist" name="playlist-name" value={formData.name || ''} onChange={handleChange} required />
          <Form.Text className="text-muted">required</Form.Text>
        </Form.Group>

        {/* PLAYLIST URL IMAGE INPUT */}
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Image</Form.Label>
          <Form.Control type="textbox" placeholder="enter an image URL" name="image" value={formData.image || ''} onChange={handleChange} required />
          <Form.Text className="text-muted">required</Form.Text>
        </Form.Group>

        {/* TODO: Dropdown select menu */}
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleChange}>
            <option value="">Select ...</option>
            {/* TODO: map over values. Remember to add a key prop. */}
            <option>Option 1</option>
          </Form.Select>
        </Form.Group>

        <button className="btn btn-primary" type="submit">
          {obj.id ? 'Update' : 'Create'} playlist
        </button>
      </Form>
    </div>
  );
}

AddPlaylistForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
