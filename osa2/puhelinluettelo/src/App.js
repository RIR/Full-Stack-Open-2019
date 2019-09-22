import React, { useState } from 'react';
import { Persons, PersonForm, Filter } from './components';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = event => {
    event.preventDefault();

    const add = person => {
      setPersons(persons.concat(person));
      setNewName('');
      setNewNumber('');
    };

    const alreadyAdded = person => persons.some(p => p.name === person.name); // Need for number comparison was not mentioned.

    const person = { name: newName, number: newNumber };
    alreadyAdded(person) ? window.alert(`${person.name} is already added to phonebook`) : add(person);
  };

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleFilterChange = event => setFilter(event.target.value);

  /*
  Maybe "startsWith" would be more appropriate, but assignment example 2.9* seems to use something like this.
  Also didn't feel the need to create a state for this, since it can be derived from persons and filter states.
  Not sure, what's the convention in these cases.
  */
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        onNameChange={handleNameChange}
        nameValue={newName}
        onNumberChange={handleNumberChange}
        numberValue={newNumber}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
