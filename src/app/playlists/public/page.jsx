/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState, useEffect } from 'react';
import { getPublicPlaylists } from '../../../api/playlistData';
import PublicPlaylistCard from '../../../components/PublicPlaylistCard';

export default function PublicPlaylists() {
  const [publicPlaylists, setPublicPlaylists] = useState([]);

  useEffect(() => {
    getPublicPlaylists().then(setPublicPlaylists);
  }, []);

  return (
    <div className="text-center my-4">
      <h1>Public Playlists</h1>

      {publicPlaylists.map((playlist) => (
        <div className="row-of-playlist-cards my-3" style={{ width: '20rem', height: '20rem' }}>
          <PublicPlaylistCard key={playlist.id} playlistObj={playlist} />
        </div>
      ))}
    </div>
  );
}
