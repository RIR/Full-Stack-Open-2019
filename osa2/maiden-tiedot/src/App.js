import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DisplayCountries, Filter } from './components';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = event => setFilter(event.target.value);

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange} />
      {filteredCountries.length > 0 && <DisplayCountries initialCountries={filteredCountries} />}
    </div>
  );
};

export default App;
