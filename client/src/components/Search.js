import React from "react";

function Search({search, onSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Deliciousness:</label>
      <input
        type="text"
        id="search"
        placeholder="What should I eat today..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;