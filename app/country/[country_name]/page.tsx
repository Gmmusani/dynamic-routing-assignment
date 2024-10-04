import React from 'react'

const Country = ({params}:{params: {country_name: string}}) => {
    let pakistan = {
        name: "Pakistan",
        capital: "Islamabad",
        population: "220000000" 
    };
    let india = {
        name: "India",
        capital: "Delhi",
        population: "1454145129"
    };
    let australia = {
        name: "Australia",
        capital: "Canberra",
        population: "25422788"
    };
    let england = {
        name: "England",
        capital: "London",
        population: "67110958"
    };
    
    const countries = {
        pakistan,
        india,
        england,
        australia
    };

    const countryData = countries[params.country_name.toLowerCase()];

  return (
    <div>
        <h1 className='text-center bg-slate-950 text-blue-500 m-5 p-3 '>Name : {countryData ? params.country_name : "Country not found"}</h1>
        <h1 className='text-center bg-slate-950 text-blue-500 m-5 p-3 '>Capital : {countryData ? countryData.capital : "N/A"}</h1>
        <h1 className='text-center bg-slate-950 text-blue-500 m-5 p-3 '>Population : {countryData ? countryData.population : "N/A"}</h1>
    </div>
  )
}

export default Country
