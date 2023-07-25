import React from 'react';

const PersonFuncional = (props) => {
  const { name, surname, age } = props;

  return (
    <div>
      <span>Name: {name}</span>
      <span>Surname: {surname}</span>
      <span>Age: {age}</span>
    </div>
  );
};

export default PersonFuncional;
