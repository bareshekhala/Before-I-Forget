import React from "react";

function SearchBar({ query, setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Find a music..."
        className="w-44 md:w-80 px-6 form m-3 h-15 mt-5"
      />
    </div>
  );
}

export default SearchBar;
