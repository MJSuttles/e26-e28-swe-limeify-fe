import React, { useState } from 'react';
import { searchSong } from '../api/songData';
import SongCard from './SongCard';

export default function SearchBox() {
  const [query, setQuery] = useState([]);

  const handleChange = (e) => {
    const userInput = e.target.value;
    if (userInput === '') {
      setQuery([]);
    } else {
      searchSong(userInput).then(setQuery);
    }
  };

  return (
    <>
      <input type="text" name="search" id="search-box" placeholder="search a song" onChange={handleChange} aria-label="Search" className="mb-5" style={{ width: '596px', height: '43px' }} />

      {query.map((item) => (
        <SongCard className="search-song-card" key={item.id} songObj={item} />
      ))}
    </>
  );
}
