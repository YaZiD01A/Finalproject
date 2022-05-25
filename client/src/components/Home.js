import { handleBreakpoints } from '@mui/system';
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Button from '@mui/material/Button';
import { GETCAR } from '../utils/query';
import { useQuery, useLazyQuery } from '@apollo/client'

function Home(){ 
  const [foundItems, setFoundItems] = useState ([])
  // const {data, loading, error, refetch} = useQuery(GETCAR)
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

  const handleSubmit = async ()=>{
    console.log(car.year)
    try {
      // refetch({
      //   year: car.year
      // })
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
            <h3>Car Key</h3>
            <h4>Search by year</h4>
        </header>
        <div className="center">
            <Dropdown handleSelect={handleChange} car= {car.year} options={year} name="year"/>
            <Dropdown handleSelect={handleChange} car= {car.make} options={make} name="make"/>
            <Dropdown handleSelect={handleChange} car= {car.model} options={model} name="model"/>
            <Dropdown handleSelect={handleChange} car= {car.price} options={price} name="price"/>
            
           <Button variant="contained" onClick={()=>handleSubmit()}>Search</Button>
        </div>

        {/* {disabled ===false && (

        <div>
            <p>year: {car.year}</p>
            <p>make: {car.make}</p>
            <p>model: {car.model}</p>
            <p>price: {car.price}</p>
            
        </div>
        )} */}
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