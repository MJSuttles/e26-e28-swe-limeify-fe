import React, { useState } from 'react';
import { searchSong } from '../api/songData';
import SongCard from './SongCard';

export default function SearchBox() {
  const [query, setQuery] = useState([]);

  const handleChange = (e) => {
    const userInput = e.target.value;
    // console.warn(userInput);
    if (userInput === '') {
      setQuery([]);
    } else {
      searchSong(userInput).then(setQuery);
      // console.warn(query);
    }
  };

  return (
    <div>
      <input type="text" name="search" id="search-box" placeholder="search a song" onChange={handleChange} />
      {query.map((item) => (
        <SongCard key={item.id} songObj={item} />
      ))}
    </div>
  );
}
