'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { addSongToPlaylist, getPlaylists } from '../../api/playlistData';

export default function AddToPlaylistForm() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { songId } = searchParams.get('songId');

  useEffect(() => {
    getPlaylists().then(setPlaylists);
  }, []);

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPlaylist) return alert('Please select a playlist.');

    try {
      await addSongToPlaylist(songId, selectedPlaylist);
      alert('Song added to playlist!');
      router.push('/playlists');
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error('Error adding song to playlist:', error);
    }
  };

  return (
    <div style={{ width: '50%', margin: 'auto', paddingTop: '2rem' }}>
      <h2>Add Song to Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="playlist-select">Choose Playlist:</label>
          <select id="playlist-select" className="form-control" value={selectedPlaylist} onChange={(e) => setSelectedPlaylist(e.target.value)} required>
            <option value="">Select a playlist</option>
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Song
        </button>
      </form>
    </div>
  );
}
