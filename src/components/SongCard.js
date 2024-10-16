import React from 'react';
// import PropTypes from 'prop-types';

export default function SongCard() {
  return (
    <>
      {/* <h1 className="my-3">Home</h1>
      <p>${songObject.name} Song Name</p>
      <p>${songObject.} Album Name</p>
      <p>${songObject.} Artist Name</p>
      <p>${songObject.length} Song Length</p>
      <button type="button" className="btn btn-primary">
        ...
      </button> */}
      <h1 className="my-3">Home</h1>
      <div className="border">
        <p>Song Name</p>
        <p>Album Name</p>
        <p>Artist Name</p>
        <p>Song Length</p>
        <button type="button" className="btn btn-primary">
          ...
        </button>
      </div>
    </>
  );
}

// SongCard.propTypes = {
//   songObject: PropTypes.shape({
//     name: PropTypes.string,
//     length: PropTypes.number,
//   }).isRequired,
// };
