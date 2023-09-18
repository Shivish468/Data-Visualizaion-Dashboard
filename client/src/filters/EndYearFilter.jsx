import React from 'react'

const EndYearFilter = ({ onYearChange }) => {
  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    onYearChange(selectedYear);
  };

  return (
    <div>
      <label htmlFor="endYear">Select End Year:</label>
      <select id="endYear" onChange={handleYearChange}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default EndYearFilter;
