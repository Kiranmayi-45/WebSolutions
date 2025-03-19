import React, { useState, useCallback } from 'react';
import { debounce } from '../../utils/debounce';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Creating a debounced version of the search function
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
      setIsSearching(false);
    }, 300),
    [onSearch]
  );

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setIsSearching(true);
    debouncedSearch(newSearchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    setIsSearching(false);
    onSearch('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        {searchTerm && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
      {isSearching && (
        <div className="search-status">Searching...</div>
      )}
    </div>
  );
};

export default SearchBar;