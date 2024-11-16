import React, { useEffect } from "react";
import searchIcon from "../assets/searchicon.svg";

const Header = ({ searchTerm, setSearchTerm, onSearch }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  useEffect(() => {
    searchTerm === "" && onSearch("Spiderman");
  }, [searchTerm]);

  return (
    <div className="header">
      <h1>Movie Search App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <img src={searchIcon} alt="search icon" onClick={handleSearch} />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
    </div>
  );
};

export default Header;
