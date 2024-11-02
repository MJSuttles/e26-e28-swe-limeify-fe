import React from 'react';
// import { searchSong } from '../api/songData';

export default function SearchBox() {
  // const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const userInput = e.target.value;
    console.warn(userInput);
  };

  return (
    <div>
      <input type="text" name="search" id="search-box" placeholder="search a song" onChange={handleChange} />
    </div>
  );
}
