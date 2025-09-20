import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;


    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        
        <div>
            <h1>Total countries: {countries.length}</h1>
            <p>Countries visited: {visitedCountries.length}</p>
            <ol>
                {
                visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='card-container'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;