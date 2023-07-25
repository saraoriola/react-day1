import React, { Component } from 'react';

class PersonClases extends Component {
  render() {
    const { name, surname, age } = this.props;

    return (
      <div className='personText'>Happy {age}, {name} {surname}!!!</div>
    );
  }
}

export default PersonClases;
