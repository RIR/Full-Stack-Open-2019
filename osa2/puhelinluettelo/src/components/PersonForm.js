import React from 'react';

const PersonForm = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={value} onChange={onChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
