import './App.css';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import Header from './header';
import SearchFilter from './search-filter';
import Countries from './countries';

function App() {
  const fetchUrl = 'https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag';

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

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
        console.log(response);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Context.Provider value={selectedCountries}>
      <div className="App">
        <Header />
        <SearchFilter />
        <Countries />
      </div>
    </Context.Provider>
  );
}

export default App;
