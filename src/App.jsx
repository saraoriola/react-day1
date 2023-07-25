import './App.css';
import React from 'react';
import PersonFunctional from './components/PersonFunctional/PersonFunctional';

const App = () => {
  return (
    <div className="container">

      <h1 className="title">Person Component Example</h1>

      <div className="person-container">
        <PersonFunctional name="John" surname="Doe" age={30} />
      </div>

      <div className="person-container">
        <PersonFunctional name="Jane" surname="Smith" age={25} />
      </div>

      <div className="person-container">
        <PersonFunctional name="Michael" surname="Johnson" age={40} />
      </div>

    </div>
  );
};

export default App;

