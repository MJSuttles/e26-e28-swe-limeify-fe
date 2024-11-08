'use client';

import { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';
import { getSongs } from '../api/songData';
import SearchBox from '../components/SearchBox';

function Home() {
  const [songs, setSongs] = useState([]);
  // console.warn(songs);

  useEffect(() => {
    getSongs().then(setSongs);
  }, []);

  return (
    <div className="text-center my-4" id="song-page">
      <SearchBox />
      <h1 className="my-3" style={{ textAlign: 'left', marginLeft: '0' }}>
        Home
      </h1>
      {songs.map((song) => (
        <SongCard key={song.id} songObj={song} />
      ))}
    </div>
  );
}

export default Home;
