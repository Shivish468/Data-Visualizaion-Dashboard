import React, { useState, useEffect } from 'react';
import DataVisualization from './components/DataVisualization';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Data Visualization Dashboard</h1>
      <div className="filter-container">
        {/* Render your filter components here */}
      </div>
      <DataVisualization data={data} />
    </div>
  );
};

export default App;
