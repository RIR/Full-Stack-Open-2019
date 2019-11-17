import React, { useState, useEffect } from 'react';
import { Persons, PersonForm, Filter, Notification } from './components';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState();

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons));
  }, []);

  // Used just for logging the changes in persons
  useEffect(() => {
    console.log('Persons:', persons);
  }, [persons]);

  const resetFields = () => {
    setNewName('');
    setNewNumber('');
  };

  const displayNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const addPerson = event => {
    event.preventDefault();

    const add = person => {
      personService.create(person).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        resetFields();

        displayNotification('success', `Added ${person.name}`);
      });
    };

    const modify = (id, person) => {
      const { name } = person;

      if (window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(id, person)
          .then(returnedPerson => {
            setPersons(persons.map(person => (person.id !== id ? person : returnedPerson)));
            resetFields();

            displayNotification('success', `Updated ${name}`);
          })
          .catch(error => {
            displayNotification('error', `the person '${name}' was already deleted from the server`);

            setPersons(persons.filter(person => person.id !== id));

            resetFields();
          });
      }
    };

    const person = { name: newName, number: newNumber };
    const personFound = persons.find(p => p.name === person.name);

    personFound ? modify(personFound.id, person) : add(person);
  };

  const removePerson = (id, name) => () => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id));

        displayNotification('success', `Removed ${name}`);
      });
    }
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
      {notification && <Notification message={notification.message} type={notification.type} />}
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
      <Persons persons={filteredPersons} onRemove={removePerson} />
    </div>
  );
};

export default App;
