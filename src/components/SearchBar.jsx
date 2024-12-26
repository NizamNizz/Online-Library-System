import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Trigger parent search function
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

// Prop validation
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
