import React, { useState, useEffect } from 'react';
import Countries from './Countries';
import Country from './Country';

const DisplayCountries = ({ initialCountries }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(initialCountries);
  }, [initialCountries]);

  const length = countries.length;
  const tooManyMatches = length > 10;
  const singleMatch = length === 1;

  const handleCLick = event => setCountries([countries.find(country => country.name === event.target.id)]);

  return (
    <div>
      {tooManyMatches ? (
        <p>Too many matches, specify another filter</p>
      ) : singleMatch ? (
        <Country country={countries[0]} />
      ) : (
        <Countries countries={countries} handleClick={handleCLick} />
      )}
    </div>
  );
};

export default DisplayCountries;
