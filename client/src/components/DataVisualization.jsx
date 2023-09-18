import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import EndYearFilter from '../filters/EndYearFilter';
import TopicsFilter from '../filters/TopicFilter';
import SectorFilter from '../filters/SectorFilter';
import RegionFilter from '../filters/RegionFilter';
import PestFilter from '../filters/PESTFilter';
import SourceFilter from '../filters/SourceFilter';
import SwotFilter from '../filters/SWOTFilter';
import CountryFilter from '../filters/CountryFilter';
import CityFilter from '../filters/CityFilter';

const DataVisualization = ({
  selectedEndYear,
  selectedTopics,
  selectedSector,
  selectedRegion,
  selectedPest,
  selectedSource,
  selectedSwot,
  selectedCountry,
  selectedCity,
}) => {
  const svgRef = useRef();


  // Update visualization when any filter changes
  useEffect(() => {
    const fetchAndVisualizeData = async () => {
      const data = await fetchData(selectedEndYear, selectedTopics, selectedRegion, selectedPest, selectedSector, selectedSource, selectedSwot, selectedCountry, selectedCity);  // Fetch data from your API
      
      // D3.js visualization code using the fetched data
      // Here, we'll create a simple bar chart
      const margin = { top: 20, right: 30, bottom: 40, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = d3.select(svgRef.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([0, width])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([height, 0]);

        svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.label))
        .attr('width', x.bandwidth())
        .attr('y', d => y(d.value))
        .attr('height', d => height - y(d.value));

      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y));
    };

    fetchAndVisualizeData();
  }, [
    selectedEndYear,
    selectedTopics,
    selectedSector,
    selectedRegion,
    selectedPest,
    selectedSource,
    selectedSwot,
    selectedCountry,
    selectedCity,
  ]);

  return (
    <div>
      <EndYearFilter onYearChange={setSelectedEndYear} />
      <TopicsFilter onTopicsChange={setSelectedTopics} />
      <SectorFilter onSectorChange={setSelectedSector} />
      <RegionFilter onRegionChange={setSelectedRegion} />
      <PestFilter onPestChange={setSelectedPest} />
      <SourceFilter onSourceChange={setSelectedSource} />
      <SwotFilter onSwotChange={setSelectedSwot} />
      <CountryFilter onCountryChange={setSelectedCountry} />
      <CityFilter onCityChange={setSelectedCity} />
      <svg ref={svgRef}></svg>;
    </div> 
  );
};

export default DataVisualization;
