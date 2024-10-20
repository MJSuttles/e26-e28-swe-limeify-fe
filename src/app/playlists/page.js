'use client';

import React, { useState, useEffect } from 'react';
import { getPlaylists } from '../../api/playlistData';
import PlaylistCard from '../../components/PlaylistCard';

export default function PlaylistsPage() {
  // Set a state for playlists
  const [playlists, setPlaylists] = useState([]);

  // Create a function that makes the API call to get all the playlists
  useEffect(() => {
    getPlaylists().then(setPlaylists);
  }, []);

  return (
    <div className="container text-center my-4">
      <h1 className="my-3">Playlists Page</h1>
      {playlists.map((playlist) => (
        <PlaylistCard playlistObj={playlist} />
      ))}
    </div>
  );
}
