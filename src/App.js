import './App.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Context from './Context';
import Header from './header';
import SearchFilter from './search-filter';
import Countries from './countries';
import IndividualView from './individual-view';

function App() {
  const fetchUrl = 'https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag;alpha3Code';

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    fetch(fetchUrl)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(response => {
        setCountries(response);
        setSelectedCountries(response);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    let result = [...countries];

    if(searchTerm) {
      result = result.filter((country) => {
        if(country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return country;
        }
      });
    }

    if(selectedRegion && selectedRegion !== "all") {
      result = result.filter((country) => {
        if(country.region === selectedRegion) {
          return country;
        }
      })
    }

    setSelectedCountries(result);
  }, [selectedRegion, searchTerm, countries])

  return (
    <Context.Provider value={{ selectedCountries, countries }}>
      <div className="App">
        <Header />
        <Route
          exact 
          path='/'
          render={(props) => 
            <SearchFilter 
              {...props}
              setSearchTerm = {setSearchTerm}
              setSelectedRegion = {setSelectedRegion}
            />
          }
        />
        <Route
          exact 
          path='/'
          render={(props) => 
            <Countries
              {...props}
            />
          }
        />
        <Route 
          path='/:countryName'
          render={(props) => 
            <IndividualView 
              {...props}
            />
          }
        />
      </div>
    </Context.Provider>
  );
}

export default App;
