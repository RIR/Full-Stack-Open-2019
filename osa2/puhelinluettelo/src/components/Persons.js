import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => (
  <ul>
    {persons.map(({ name }) => (
      <Person key={name} name={name} />
    ))}
  </ul>
);
export default Persons;
