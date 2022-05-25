import { handleBreakpoints } from '@mui/system';
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Button from '@mui/material/Button';
import { GETCAR } from '../utils/query';
import { useQuery, useLazyQuery } from '@apollo/client'

function Home(){ 
  const [foundItems, setFoundItems] = useState ([])
  const [getCars, {loading, error, data}] = useLazyQuery(GETCAR)
  const [car, setCar] = useState({
      year: "",
      make: "",
      model: "",
      price: ""
  });
  const [disabled, setDisabled] = useState(true);
console.log(data)
  const year = [
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
  ];

  const make = [
    "Ford",
    "Mercedes",
    "Cheverolet",
    "BMW",
  ]

  const handleChange = (event) => {
      const {name, value} = event.target
      setCar({...car, [name]: value});

      console.log(car)

  };

  const handleSubmit = async ()=>{
    console.log(car.year)
    try {
      getCars({
        variables: {year: car.year}
      })
    }
    catch (err){
      console.error(err)
    }
    setDisabled(false)

  }

    return (
        <>
        <header className="center">
            <h3>CarKey</h3>
        </header>

        <div className="center">
            <h4>Search by year</h4>
            <Dropdown handleSelect={handleChange} car= {car.year} options={year} name="year"/>            
        </div>
      
        <div className="center">
           <Button variant="contained" onClick={()=>handleSubmit()}>Search</Button>
        </div>

        {data?.getCar.map((carItem, i) => 
          <div key={i} className="center">
          <p>{carItem.year}</p>
          <p>{carItem.make}</p>
          <p>{carItem.model}</p>
          <p>{carItem.price}</p>
          </div>
        )}
        </>

    )
}

export default Home