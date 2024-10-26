'use client';

import React, { useState, useEffect } from 'react';
import { getPlaylists } from '../../api/playlistData';
import PlaylistCard from '../../components/PlaylistCard';

export default function PlaylistsPage() {
  // Set a state for playlists
  const [playlists, setPlaylists] = useState([]);

  // I moved what was originally inside the useEffect callback into this callback. We can pass in this
  // callback to make it easier to fetch new data after we delete, update, or create a new record in our database.
  const fetchPlaylistData = () => {
    getPlaylists().then(setPlaylists);
  };

  // Create a function that makes the API call to get all the playlists
  useEffect(() => {
    fetchPlaylistData();
  }, []);

  return (
    <div className="container text-center my-4">
      <h1 className="my-3">Playlists Page</h1>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={fetchPlaylistData} />
      ))}
    </div>
  );
}
