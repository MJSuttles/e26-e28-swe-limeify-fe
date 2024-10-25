'use client';

import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { getPlaylists, updatePlaylist } from '../../api/playlistData';
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
    updatePlaylist(formData).then(() => router.push('/playlists'));
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

// 'use client'

// import React, { useState, useEffect } from "react";
// import { Form } from "react-bootstrap";
// import { useRouter } from "next/navigation";
// import { getPlaylists, updatePlaylist } from "../../api/playlistData";
// import { useAuth } from "../../utils/context/authContext";
// import PropTypes from "prop-types";

// // Step one - Set initialFormState as the default parameter. Grab the useAuth hook. Set a useState inside PlaylistForm. Initialize router object.
// const initialFormState = {
//   name: '',
// }

// export default function SongToPlaylistForm({ obj = initialFormState }) {
//   const { user } = useAuth();
//   const router = useRouter();
// }

// // Step two - set an initial state for the form.
// const [formData, setFormData ] = useState(obj);
// const [playlists, setPlaylists] = useState([]);

// // Step three - useEffect
// useEffect(() => {
//   getPlaylists().then(setPlaylists);
//   if (obj.id) setFormData(obj);
// }, [obj, user]);

// // Step four - handleChange. This will be used as a callback function.
// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

// // Step five - handleSubmit.
// const handleSubmit = (e) => {
//   e.preventDefault();
//   // TODO: Use router to send the user to the playlist they just created. Requires an API call to the backend to create a playlist, push payload to the BE.
//   updatePlaylist(formData).then(() => router.push('/playlists'));

//   return (
//     <div className="d-flex flex-column align-items-center my-4" id="add-song-to-playlist">
//       <h1 className="my-5">Add to Playlist</h1>

//       <Form onSubmit={handleSubmit} className="text-center" style={{ width: '50%' }}>
//         {/* TODO: Each Form.Control needs an onChange attribute. Pass in handleChange as a callback. */}

//         {/* TODO: Dropdown select menu */}
//         <Form.Group className="mb-3">
//           <Form.Label>To which playlist would you like to add this</Form.Label>
//           <Form.Select onChange={handleChange} aria-label="Playlist" name="playlistName" className="mb-3" value={formData.name || ''} required>
//             <option value="">Select ...</option>
//             {/* TODO: map over values. Remember to add a key prop. */}
//             {playlists.map((playlist) => (
//               <option key={playlist.name} value={String(playlist.name)}>
//                 {playlist.name}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>

//         <button className="btn btn-primary" type="submit">
//           Add
//         </button>
//       </Form>
//     </div>
//   );
// };

// SongToPlaylistForm.propTypes = {
//   obj: PropTypes.shape({
//     name: PropTypes.string,
//   }).isRequired,
// }
