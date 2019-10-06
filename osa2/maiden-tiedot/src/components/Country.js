import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const Country = ({ country }) => {
  const { name, capital, population, languages, flag } = country;

  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    /*
     This is sort of a hack to avoid setting state for unmounted component
     More about it in https://github.com/facebook/react/issues/14369#issuecomment-468267798
     */

    let didCancel = false;

    // I used this from my env, but will not commit it to version control
    // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const API_KEY = 'INSERT YOUR API KEY IN HERE';

    axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`).then(response => {
      if (!didCancel) {
        setWeatherData(response.data);
      }
    });

    return () => {
      didCancel = true;
    };
  }, []);

  const languageList = languages.map(({ name }) => <li key={name}>{name}</li>);

  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Languages:</p>
      <ul>{languageList}</ul>
      <img src={flag} alt="Flag of the country" width="200" height="200" />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};
export default Country;
