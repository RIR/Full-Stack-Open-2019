import React from 'react';

const DisplayCountry = ({ name, capital, population, languages, flag }) => {
  const languageList = languages.map(({ name }) => <li key={name}>{name}</li>);
  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Languages:</p>
      <ul>{languageList}</ul>
      <img src={flag} alt="Flag of the country" width="200" height="200" />
    </div>
  );
};
export default DisplayCountry;
