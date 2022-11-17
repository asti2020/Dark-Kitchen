import React from "react";

function Search({setSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Cuisines:</label>
      <input
        type="text"
        id="search"
        placeholder="What should I eat today..."
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;