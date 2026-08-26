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
        placeholder="Search..."
        className="w-34 md:w-70 px-6 form m-3 h-15 mt-5"
      />
    </div>
  );
}

export default SearchBar;
