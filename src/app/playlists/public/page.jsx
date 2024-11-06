/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState, useEffect } from 'react';
import { getPublicPlaylists } from '../../../api/playlistData';
import PlaylistCard from '../../../components/PlaylistCard';

export default function PublicPlaylists() {
  const [publicPlaylists, setPublicPlaylists] = useState([]);

  const fetchPlaylistData = () => {
    getPublicPlaylists().then(setPublicPlaylists);
  };

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  return (
    <div className="container text-center my-4">
      <h1 className="my-3">Public Playlists</h1>
      <div className="row">
        {publicPlaylists.map((playlist) => (
          <div className="col-md-4 my-3" key={playlist.id}>
            <PlaylistCard playlistObj={playlist} onUpdate={fetchPlaylistData} />
          </div>
        ))}
      </div>
    </div>
  );
}
