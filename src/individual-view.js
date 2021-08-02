import React, { useContext } from 'react';
import Context from './Context';

function goBack(props) {
    props.history.push('/');
}

function getBorderCountries(selectedCountry, countries, props) {
    const borderCodes = selectedCountry.borders;
    const borderCountries = countries.filter(({ alpha3Code }) => borderCodes.includes(alpha3Code)); 
    if(borderCountries.length === 0) {
        return <p>No Border Countries</p>
    }
    return borderCountries.map(country => <button key={country.name} onClick={() => props.history.push(`/${country.name}`)}>{country.name}</button>)
}

export default function IndividualView(props) {
    const { countries } = useContext(Context);
    const selectedCountry = countries.filter(country => country.name === props.match.params.countryName)[0];

    return (
        <div className="individual-view">
            <button className="back-button" onClick={() => {goBack(props)}}>Back</button>
            <div className="country-details">
                <h2>{selectedCountry.name}</h2>
                <div className='general-facts'>
                    <p>Native Name: {selectedCountry.nativeName}</p>
                    <p>Population: {parseInt(selectedCountry.population).toLocaleString("en-US")}</p>
                    <p>Region: {selectedCountry.region}</p>
                    <p>Sub Region: {selectedCountry.subregion}</p>
                    <p>Capital: {selectedCountry.capital}</p>
                </div>
                <div>
                    <p>Top Level Domain: {selectedCountry.topLevelDomain[0]}</p>
                    <p>Currencies: {selectedCountry.currencies.map(currency => 
                        currency.name.toString()
                    ).join(", ")}</p>
                    <p>Languages: {selectedCountry.languages.map(language => 
                        language.name.toString()    
                    ).join(", ")}</p>
                </div>
                <div>
                    <h3>Border Countries:</h3>
                    {getBorderCountries(selectedCountry, countries, props)}
                </div>
            </div>
        </div>
    )    
};