'use client';

import { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';
import getSongs from '../api/songData';

function Home() {
  const [songs, setSongs] = useState([]);
  console.warn(songs);

  useEffect(() => {
    getSongs().then(setSongs);
  }, []);

  return (
    <div className="container text-center my-4">
      <h1 className="my-3">Home</h1>
      {songs.map((song) => (
        <SongCard songObj={song} />
      ))}
    </div>
  );
}

export default Home;
