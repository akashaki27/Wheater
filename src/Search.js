function SearchButton ({ onSearch, onReset }){
  return (
    <div>
      <button onClick={onSearch}>Search</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default SearchButton;
