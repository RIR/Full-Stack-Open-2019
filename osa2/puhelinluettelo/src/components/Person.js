import React from 'react';

const Person = ({ id, name, number, onRemove }) => (
  <li>
    {name}: {number}
    <button id={id} style={{ margin: '10px', background: '#FFF' }} onClick={onRemove(id, name)}>
      delete
    </button>
  </li>
);

export default Person;
