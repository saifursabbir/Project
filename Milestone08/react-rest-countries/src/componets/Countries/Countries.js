import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Hello from countries: {countries.length}
            </h2>
            {
                countries.map(country => <Country name={country.name} capital={country.capital} population={country.population} ></Country>)
            }
        </div>
    );
};

export default Countries;