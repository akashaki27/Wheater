import React, { useState } from 'react';
import Zip from './Zip'
import Temperature from './Temprature';
import Search from './Search';
import Error from './Error';
import City from './City';

function WeatherWidget  () {
  const [selectedCity, setSelectedCity] = useState('None');
  const [zipcode, setZipcode] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [error, setError] = useState('');

  

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setError('');
  };

  const handleZipcodeChange = (code) => {
    setZipcode(code);
    setError('');
  };

  const handleSearch = () => {
    if (selectedCity !== 'None' && zipcode !== '') {
      setError('Please select either a city or enter a zipcode, not both.');
      return;
    }

    const searchKey = selectedCity !== 'None' ? selectedCity : zipcode;
    fetchWeatherData(searchKey);
  };

  const handleReset = () => {
    setSelectedCity('None');
    setZipcode('');
    setError('');
  };

  return (
    <div>
      <City selectedCity={selectedCity} onCityChange={handleCityChange} />
      <Zip zipcode={zipcode} onZipcodeChange={handleZipcodeChange} />
      <Search onSearch={handleSearch} onReset={handleReset} />
      <Error error={error} />
      <Temperature recentSearches={recentSearches} />
    </div>
  );
};

export default WeatherWidget;
