'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../utils/context/authContext';
import { createPlaylist, updatePlaylist } from '../../api/playlistData';
import getCategories from '../../api/categoryData';

// Step one - Set initialFormState as the default parameter. Grab the useAuth hook. Set a useState inside PlaylistForm. Initialize router object.
const initialFormState = {
  name: '',
  image: '',
  categoryId: Number(''),
  category: {
    id: Number(''),
    name: '',
  },
  songs: [],
  isPublic: false,
};
export default function PlaylistForm({ obj = initialFormState }) {
  const { user } = useAuth();
  const router = useRouter();

  // Step two - set an initial state for the form.
  const [formData, setFormData] = useState(obj);
  // console.warn(formData);
  const [categories, setCategories] = useState([]);

  // Step three - useEffect
  useEffect(() => {
    getCategories().then(setCategories);
    if (obj.id) setFormData(obj);
  }, [obj, user]);

  // Handle isPublic Toggle
  const handleToggle = () => {
    setFormData((prevState) => ({
      ...prevState,
      isPublic: !prevState.isPublic,
    }));
  };

  // Step four - handleChange. This will be used as a callback function.
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle the logic to properly update the the values in the category object from the initialFormState.
    if (name === 'categoryId') {
      // Store the value of the selected categoryId after finding it using the array.find method.
      const selectedCategory = categories.find((category) => category.id === Number(value));

      // Logs the category object
      console.warn('selectedCategory: ', selectedCategory);

      // Include the category object and the categoryId as part of whatever is currently stored in formData.
      setFormData((prevState) => ({
        ...prevState,
        categoryId: selectedCategory.id,
        category: {
          // id: selectedCategory.id,
          name: selectedCategory.name,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Step five - handleSubmit.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      // TODO: Use router to send the user to the playlist they just created. Requires an API call to the backend to create a playlist, push payload to the BE.
      // updatePlaylist(formData).then(() => router.push(`/playlists/${obj.id}`));
      updatePlaylist(formData).then(() => router.push(`/playlists`));
    } else {
      // New Payload? Push the payload to the BE, update/patch payload with the id key that BE would return.
      const payload = { ...formData, uid: user.uid };
      console.warn('Payload: ', payload);

      // Monitor what happens when sending payloads as a POST request in Postman.
      createPlaylist(payload).then(() => {
        router.push('/playlists');
      });
    }
  };

  return (
    <div className="d-flex flex-column align-items-center my-4" id="add-update-playlist">
      <h1 className="my-5">Playlist Form</h1>

      <Form onSubmit={handleSubmit} className="text-center" style={{ width: '50%' }}>
        {/* PLAYLIST NAME INPUT */}
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control type="textbox" placeholder="name of playlist" name="name" value={formData.name || ''} onChange={handleChange} required />
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
          <Form.Select onChange={handleChange} aria-label="Category" name="categoryId" className="mb-3" value={formData.categoryId || ''} required>
            <option value="">Select ...</option>
            {/* TODO: map over values. Remember to add a key prop. */}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <button type="button" onClick={handleToggle}>
          {formData.isPublic ? 'Public' : 'Private'}
        </button>
        <button className="btn btn-primary" type="submit">
          {obj.id ? 'Update' : 'Create'} playlist
        </button>
      </Form>
    </div>
  );
}

PlaylistForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    categoryId: PropTypes.number,
    songs: PropTypes.arrayOf,
    isPublic: PropTypes.bool,
  }).isRequired,
};
