import React, { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = event => {
    event.preventDefault();

    const person = { name: newName };
    const alredyAdded = person => persons.some(p => p.name === person.name);

    if (alredyAdded(person)) {
      window.alert(`${person.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(person));
      setNewName('');
    }
  };

  const handleNameChange = event => setNewName(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm onChange={handleNameChange} onSubmit={addPerson} value={newName} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
