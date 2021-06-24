import React, { useContext } from 'react';
import Context from './Context';

export default function Countries() {
    const countries = useContext(Context);
    return (
        <div className="countries">
            <h2>Countries here!</h2>
            {countries.map(country => 
                <div key={country.name} className="country">
                    <h3 className="name">{country.name}</h3>
                    <div className="details">
                        <p>Population: {parseInt(country.population).toLocaleString('en-US')}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>    
            )}
        </div>
    )
}