import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => (
  <ul>
    {persons.map(({ name, number }) => (
      <Person key={name} name={name} number={number} />
    ))}
  </ul>
);
export default Persons;
