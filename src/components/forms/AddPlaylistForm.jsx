import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';

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
    } else {
      // New Payload? Push the payload to the BE, update/patch payload with the id key that BE would return.
    }
  };

  return (
    <div>
      <h1>Add Playlist</h1>

      <Form onSubmit={handleSubmit} className="text-center">
        {/* TODO: Each Form.Control needs an onChange attribute. Pass in handleChange as a callback. */}
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control type="textbox" placeholder="name of playlist" value={formData.name || ''} onChange={handleChange} required />
          <Form.Text className="text-muted">required</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Image</Form.Label>
          <Form.Control type="textbox" placeholder="enter an image URL" value={formData.image || ''} onChange={handleChange} required />
          <Form.Text className="text-muted">required</Form.Text>
        </Form.Group>
        {/* TODO: Dropdown menu */}
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Category</Form.Label>
          <Form.Control type="textbox" placeholder="enter an image URL" value={formData.categoryId || ''} onChange={handleChange} required />
          <Form.Text className="text-muted">required</Form.Text>
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
