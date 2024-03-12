function Temperature({ recentSearches })  {
  return (
    <div>
      <h3>Recent Searches:</h3>
      {recentSearches.map((search, index) => (
        <div key={index}>{search}</div>
      ))}
    </div>
  );
};

export default Temperature;
