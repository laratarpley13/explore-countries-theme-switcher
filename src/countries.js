import React, { useContext } from 'react';
import Context from './Context';

function selectCountry(countryName, props) {
    console.log(countryName);
    props.history.push(`/${countryName}`)

}

export default function Countries(props) {
    const { selectedCountries } = useContext(Context);
    return (
        <div className="countries">
            <h2>Countries here!</h2>
            {selectedCountries.map(country => 
                <div key={country.name} className="country" onClick={() => selectCountry(country.name, props)}>
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