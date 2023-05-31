import React from 'react';
import './searchBar.css'; // Import the CSS file for styling

const searchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default searchBar;
