import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = event => {
    event.preventDefault();
    const person = { name: newName };
    setPersons(persons.concat(person));
    setNewName('');
  };

  const handleNameChange = event => setNewName(event.target.value);

  const rows = () => persons.map(({ name }) => <li key={name}>{name}</li>);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
