import { Component } from 'react';

class PersonClases extends Component {
  render() {
    const { name, surname, age } = this.props;

    return (
      <div className='personText'>
        <span>Name: {name}</span>
        <span>Surname: {surname}</span>
        <span>Age: {age}</span>
      </div>
    );
  }
}

export default PersonClases;
