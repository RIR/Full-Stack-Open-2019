import React from 'react';

const PersonForm = ({ onNameChange, nameValue, onNumberChange, numberValue, onSubmit }) => {
  /*
  This was not in assignment, but I thought it's reasonable to expect not empty input values.
  Optional approach woul've been to use the alert in here as well.
  */

  const invalidInput = nameValue.length < 1 || numberValue < 1;

  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameValue} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={numberValue} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit" disabled={invalidInput}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
