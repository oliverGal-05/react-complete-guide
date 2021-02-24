import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Let's GO!</h1>
        <Person name="Max">My hobbie is: Ice-Skating</Person>
        <Person name="John"/>
      </div>
    );
  }
}

export default App;
