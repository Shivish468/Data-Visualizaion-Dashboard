import React from 'react';

const CityFilter = ({ onCityChange }) => {
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    onCityChange(selectedCity);
  };

  return (
    <div>
      <label htmlFor="city">Select City:</label>
      <select id="city" onChange={handleCityChange}>
        <option value="city1">City 1</option>
        <option value="city2">City 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default CityFilter;
