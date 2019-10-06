import React from 'react';
import DisplayCountries from './DisplayCountries';
import DisplayCountry from './DisplayCountry';

const Countries = ({ countries }) => {
  const singleCountry = countries.length === 1;
  const { name, capital, population, languages, flag } = countries[0];
  console.log('Country:', countries[0]);

  return singleCountry ? (
    <DisplayCountry name={name} capital={capital} population={population} languages={languages} flag={flag} />
  ) : (
    <DisplayCountries countries={countries} />
  );
};

export default Countries;
