const SearchBar = ({ searchTerm, onSearchChange }) => (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-bar"
    />
  );
  export default SearchBar;
  