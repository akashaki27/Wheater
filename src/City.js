function City({ selectedCity, onCityChange })
 {
  return (
    <div>
      <label>Select City: </label>
      <select value={selectedCity} onChange={(e) => onCityChange(e.target.value)}>
        <option value="None">None</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
      </select>
    </div>
  );
};

export default City;
