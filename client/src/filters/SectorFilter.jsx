import React from 'react';

const SectorFilter = ({ onSectorChange }) => {
  const handleSectorChange = (event) => {
    const selectedSector = event.target.value;
    onSectorChange(selectedSector);
  };

  return (
    <div>
      <label htmlFor="sector">Select Sector:</label>
      <select id="sector" onChange={handleSectorChange}>
        <option value="sector1">Sector 1</option>
        <option value="sector2">Sector 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default SectorFilter;
