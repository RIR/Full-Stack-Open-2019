import React from 'react';
import Person from './Person';

const Persons = ({ persons, onRemove }) => (
  <ul>
    {persons.map(({ id, name, number }) => {
      return <Person key={name} id={id} name={name} number={number} onRemove={onRemove} />;
    })}
  </ul>
);
export default Persons;
