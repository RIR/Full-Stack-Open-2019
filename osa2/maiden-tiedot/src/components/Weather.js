import React from 'react';

const Weather = ({ data }) => {
  const {
    location: { name },
    current: { temperature, wind_dir, wind_speed, weather_icons }
  } = data;
  return (
    <div>
      <h2>Weather in {name}</h2>
      <span>
        <b>Temperature: </b>
        {temperature} Celcius
      </span>
      <div>
        <img src={weather_icons[0]} alt="Weather icons" width="100" height="100" />
      </div>
      <span>
        <b>Wind: </b>
        {wind_speed} kph direction {wind_dir}
      </span>
    </div>
  );
};

export default Weather;
