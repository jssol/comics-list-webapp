import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ searchComics, className }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchComics(query));
  };

  return (
    <div className={className} data-theme="light">
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="active:outline-none focus:outline-none h-full px-4 py-2"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button
        type="button"
        className="lg:border-x-[0.5px] lg:p-5"
        onClick={handleSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
};

SearchBox.propTypes = {
  searchComics: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default SearchBox;
