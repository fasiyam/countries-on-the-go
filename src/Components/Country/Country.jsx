import { useState } from "react";

const Country = ({country, handleVisitedCountries}) => {
    const {name: {common}, flags: {flags: {svg, alt}}, population: {population}, area: {area}} = country;


    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        handleVisitedCountries(country)
        setVisited(visited ? false : true);
    }

    return (
        <div className={`card ${visited && 'country-visited'}`}>
            <img src={svg} alt={alt} width="250px" />
            <div className="country-info">
                <h2>{common}</h2>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Population density: {Math.round(population / area)}</p>
                <button onClick={handleVisited}>
                    {visited? "Visited" : "Not Visited"}
                </button>
            </div>
        </div>
    );
};

export default Country;