import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

// here we are returning a bootstrap dropdown and just a button
const Filters = ({ setMainData }) => {
    const [selectedFilter, setSelectedFilter] = useState('Filter By');
    //function to call the getDataFromDB function and passing the 'year' to it entered by the user
    const handleSelect = (eventKey, event) => {
        setSelectedFilter(eventKey);
        getDataFromDB(event.target.innerText);
    };
    // func to fetch the filtered data by year and update the state
    const getDataFromDB = async(filter) => {
        try{
            const response = await axios.get(`https://dashboard-6bfs.onrender.com/api/data/${filter}`);
            setMainData(response.data.data)

            //Updateing the URL with the selected filter
            const newUrl = `${window.location.pathname}?filter=${filter}`;
            window.history.pushState(null, '', newUrl)
        }
        catch(e){
            console.log(e)
        }
    }
    // func to handle the "reset filters button" by making another api call and update state 
    const handleReset = async() => {
        try{
            setSelectedFilter('Filter By')
            const response = await axios.get("https://dashboard-6bfs.onrender.com/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
       
    }

    return (
        <div className='tabsClass' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Dropdown onSelect={handleSelect}>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedFilter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Filter By Year" >Year</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By Topics" >Topics</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By Sector" >Sector</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By Region" >Region</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By Pest" >PEST</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By Source" >Source</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By City" >City</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By Country" >Country</Dropdown.Item>
                    <Dropdown.Item eventKey="Filter By Swot" >SWOT</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Button variant="danger" onClick={handleReset} style={{ marginLeft: '1vw', width: '10rem' }}>Reset Filters</Button>
        </div>
    )
}

export default Filters