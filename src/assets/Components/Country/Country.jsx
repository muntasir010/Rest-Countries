import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, capital, population, area, cca3, maps } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>{name?.common}</h3>
            <img className='flags' src={flags?.png} alt="" />
            <h4>Capital : {capital}</h4>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <p>Google maps : {maps.googleMaps}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
                <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            </div>
            <br />
            <button onClick={handleVisited} className='btn-visit'>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;