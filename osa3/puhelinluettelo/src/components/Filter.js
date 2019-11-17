import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <span>Filter Shown with: </span>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
