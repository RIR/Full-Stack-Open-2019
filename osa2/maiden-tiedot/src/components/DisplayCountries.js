import React from 'react';

const DisplayCountries = ({ countries, handleClick }) => (
  <ul>
    {countries.map(({ name }) => (
      <li key={name}>
        {name}
        <button id={name} style={{ margin: '10px', background: '#FFF' }} onClick={handleClick}>
          Show
        </button>
      </li>
    ))}
  </ul>
);

export default DisplayCountries;
