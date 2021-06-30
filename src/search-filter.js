import React from 'react';

export default function SearchFilter(props) {
    return (
        <div className="search-filter">
            <input id="name-search" name="name-search" type="text" placeholder="Search for a country..." onChange={event => {props.setSearchTerm(event.target.value)}}/>
            <select id="region-search" name="region-search" onChange={event => {props.setSelectedRegion(event.target.value)}}>
                <option value="all">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}