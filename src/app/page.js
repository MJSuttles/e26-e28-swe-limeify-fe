'use client';

// import { useState, useEffect } from 'react';
// import SongCard from '../components/SongCard';
// import getSongs from '../api/songData';

function Home() {
  // const [songs, setSongs] = useState({});

  // useEffect(() => {
  //   getSongs().then(setSongs);
  // }, []);

  return (
    <div className="container text-center my-4">
      {/* {songs.map((song) => (
        <SongCard songObj={song} />
      ))} */}
      <p>Just rendering something to avoid a runtime error.</p>
    </div>
  );
}

export default Home;
