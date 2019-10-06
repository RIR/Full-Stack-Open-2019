import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    <input value={value} onChange={onChange} />
  </div>
);

export default Filter;
