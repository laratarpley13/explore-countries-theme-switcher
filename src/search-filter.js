import React from 'react';

export default function SearchFilter() {
    return (
        <div className="search-filter">
            <input id="name-search" name="name-search" type="text" />
            <select id="region-search" name="region-search">
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}