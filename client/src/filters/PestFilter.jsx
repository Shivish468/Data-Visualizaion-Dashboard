import React from 'react';

const PestFilter = ({ onPestChange }) => {
  const handlePestChange = (event) => {
    const selectedPest = event.target.value;
    onPestChange(selectedPest);
  };

  return (
    <div>
      <label htmlFor="pest">Select PEST:</label>
      <select id="pest" onChange={handlePestChange}>
        <option value="pest1">PEST 1</option>
        <option value="pest2">PEST 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default PestFilter;
