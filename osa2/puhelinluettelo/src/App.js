import React, { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const add = person => {
    setPersons(persons.concat(person));
    setNewName('');
    setNewNumber('');
  };

  const alreadyAdded = person => persons.some(p => p.name === person.name); // Need for number comparison was not mentioned.

  const addPerson = event => {
    event.preventDefault();
    const person = { name: newName, number: newNumber };
    alreadyAdded(person) ? window.alert(`${person.name} is already added to phonebook`) : add(person);
  };

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      {/* Todo: filter */}
      <h3>Add a new</h3>
      <PersonForm
        onNameChange={handleNameChange}
        nameValue={newName}
        onNumberChange={handleNumberChange}
        numberValue={newNumber}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
