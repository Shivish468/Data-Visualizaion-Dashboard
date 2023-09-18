import React from 'react';

const TopicsFilter = ({ onTopicsChange }) => {
  const handleTopicsChange = (event) => {
    const selectedTopics = event.target.value;
    onTopicsChange(selectedTopics);
  };

  return (
    <div>
      <label htmlFor="topics">Select Topics:</label>
      <select id="topics" onChange={handleTopicsChange}>
        <option value="topic1">Topic 1</option>
        <option value="topic2">Topic 2</option>
        {/* Add more options based on your data */}
      </select>
    </div>
  );
};

export default TopicsFilter;
