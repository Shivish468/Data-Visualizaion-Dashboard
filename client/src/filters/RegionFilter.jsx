import React from 'react';

const RegionFilter = ({ onRegionChange }) => {
  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    onRegionChange(selectedRegion);
  };

  return (
    <div>
      <label htmlFor="region">Select Region:</label>
      <select id="region" onChange={handleRegionChange}>
        <option value="region1">Region 1</option>
        <option value="region2">Region 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default RegionFilter;
