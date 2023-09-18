import React from 'react';

const CountryFilter = ({ onCountryChange }) => {
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    onCountryChange(selectedCountry);
  };

  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select id="country" onChange={handleCountryChange}>
        <option value="country1">Country 1</option>
        <option value="country2">Country 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default CountryFilter;
