'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPrivatePlaylists } from '../../api/playlistData';
import PlaylistCard from '../../components/PlaylistCard';
import { useAuth } from '../../utils/context/authContext';

export default function PlaylistsPage() {
  // Set a state for playlists
  const [playlists, setPlaylists] = useState([]);
  const { user } = useAuth();

  // I moved what was originally inside the useEffect callback into this callback. We can pass in this
  // callback to make it easier to fetch new data after we delete, update, or create a new record in our database.
  const fetchPlaylistData = () => {
    getPrivatePlaylists(user.uid).then(setPlaylists);
  };

  // Create a function that makes the API call to get all the playlists
  useEffect(() => {
    fetchPlaylistData();
  }, [user]);

  return (
    <div className="container text-center my-4">
      <h1 className="my-3">My Playlists Page</h1>
      <Link href="/playlists/new" passHref>
        <button type="button" className="btn btn-primary">
          Add a playlist
        </button>
      </Link>

      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={fetchPlaylistData} />
      ))}
    </div>
  );
}
