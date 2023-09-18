import React from 'react';

const SwotFilter = ({ onSwotChange }) => {
  const handleSwotChange = (event) => {
    const selectedSwot = event.target.value;
    onSwotChange(selectedSwot);
  };

  return (
    <div>
      <label htmlFor="swot">Select SWOT:</label>
      <select id="swot" onChange={handleSwotChange}>
        <option value="swot1">SWOT 1</option>
        <option value="swot2">SWOT 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default SwotFilter;
