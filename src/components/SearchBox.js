const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
