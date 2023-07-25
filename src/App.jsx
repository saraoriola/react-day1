import React from 'react';
import PersonFuncional from './components/PersonFunctional';

const App = () => {
  return (
    <div>
      <h1>Person Component Example</h1>
      <PersonFuncional name="John" surname="Doe" age={30} />
      <PersonClases name="Jane" surname="Smith" age={25} />
      <PersonFuncional name="Michael" surname="Johnson" age={40} />
    </div>
  );
};

export default App;
