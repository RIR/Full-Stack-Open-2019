import React from 'react';

const DisplayCountries = ({ countries }) => {
  const tooManyMatches = countries.length > 10;
  const notification = <p>Too many matches, specify another filter</p>;
  const countryList = (
    <ul>
      {countries.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );

  return tooManyMatches ? notification : countryList;
};

export default DisplayCountries;
