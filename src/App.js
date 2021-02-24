import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 27},
      { name: 'John', age: 19}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: 
      [
        { name: 'Maxed Out', age: 27},
        { name: 'John', age: 21}
      ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Let's GO!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>My hobbie is: Ice-Skating</Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
      </div>
    );
  }
}

export default App;
