import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onInputSubmit} className="searchForm ui form">
        <div className="field">
          <label htmlFor="searchInput">Video Search</label>
          <input
            type="text"
            value={searchTerm}
            name="searchInput"
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
