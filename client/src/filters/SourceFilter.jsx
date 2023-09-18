import React from 'react';

const SourceFilter = ({ onSourceChange }) => {
  const handleSourceChange = (event) => {
    const selectedSource = event.target.value;
    onSourceChange(selectedSource);
  };

  return (
    <div>
      <label htmlFor="source">Select Source:</label>
      <select id="source" onChange={handleSourceChange}>
        <option value="source1">Source 1</option>
        <option value="source2">Source 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default SourceFilter;
