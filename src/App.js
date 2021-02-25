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

  switchNameHandler = (newName) => {
    this.setState({
      people: 
      [
        { name: newName, age: 27},
        { name: 'John', age: 21}
      ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Let's GO!</h1>
        <button onClick={() => this.switchNameHandler('Maxee')}>Switch Name</button>
        <Person
         name={this.state.people[0].name}
         age={this.state.people[0].age}>My hobbie is: Ice-Skating</Person>
        <Person
         name={this.state.people[1].name}
         age={this.state.people[1].age}
         click = {this.switchNameHandler.bind(this, "Jonathan")}
         />
      </div>
    );
  }
}

export default App;
