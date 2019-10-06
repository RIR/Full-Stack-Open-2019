import React, { useState, useEffect } from 'react';
import DisplayCountries from './DisplayCountries';
import DisplayCountry from './DisplayCountry';

const Countries = ({ initialCountries }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(initialCountries);
  }, [initialCountries]);

  const length = countries.length;
  const tooManyMatches = length > 10;
  const singleMatch = length === 1;

  const displayNotification = () => <p>Too many matches, specify another filter</p>;

  const displaySingleCountry = () => {
    const { name, capital, population, languages, flag } = countries[0];
    return <DisplayCountry name={name} capital={capital} population={population} languages={languages} flag={flag} />;
  };

  const handleCLick = event => setCountries([countries.find(country => country.name === event.target.id)]);

  const displayMultipleCountries = () => <DisplayCountries countries={countries} handleClick={handleCLick} />;

  return (
    <div>
      {tooManyMatches ? displayNotification() : singleMatch ? displaySingleCountry() : displayMultipleCountries()}
    </div>
  );
};

export default Countries;
