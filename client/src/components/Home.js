import { handleBreakpoints } from '@mui/system';
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Button from '@mui/material/Button';

function Home(){ 
  const [car, setCar] = useState({
      year: "",
      make: "",
      model: "",
      price: ""
  });
  const [disabled, setDisabled] = useState(true);

  const year = [
    '2013',
    '2020',
    '2011',
    '2020',
    // 'Omar Alexander',
    // 'Carlos Abbott',
    // 'Miriam Wagner',
    // 'Bradley Wilkerson',
    // 'Virginia Andrews',
    // 'Kelly Snyder',
  ];

  const make = [
    "Ford",
    "Mercedes",
    "Cheverolet",
    "BMW",
  ];

  const model = [
      "Focus",
      "GLC",
      "Traverse",
      "330i",
  ]

  const price = [
      "10000",
      "50000",
      "15000",
      "40000",
  ]
//   hooks
// use state in a fuctioinal component

  const handleChange = (event) => {
      const {name, value} = event.target
      setCar({...car, [name]: value});

      console.log(car)

    // make an api call when the value changes
  };

  const handleSubmit = ()=>{
    //   submit the values inside of tehh car state to the api
    setDisabled(false)

  }

    return (
        <>
        <header>
            <h3>Homepage</h3>
        </header>
        <div>
            <Dropdown handleSelect={handleChange} car= {car.year} options={year} name="year"/>
            <Dropdown handleSelect={handleChange} car= {car.make} options={make} name="make"/>
            <Dropdown handleSelect={handleChange} car= {car.model} options={model} name="model"/>
            <Dropdown handleSelect={handleChange} car= {car.price} options={price} name="price"/>
            
           <Button variant="contained" onClick={()=>handleSubmit()}>Search</Button>
        </div>

        {disabled ===false && (

        <div>
            <p>year: {car.year}</p>
            <p>make: {car.make}</p>
            <p>model: {car.model}</p>
            <p>price: {car.price}</p>
            
        </div>
        )}
        </>

    )
}

export default Home