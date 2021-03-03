import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 27},
      { name: 'John', age: 19}
    ],
    showPeople: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: 
      [
        { name: newName, age: 27},
        { name: 'John', age: 21}
      ]})
  }

  nameChangeHandler = (event) => {
    this.setState({
      people: 
      [
        { name: 'Max', age: 27},
        { name: event.target.value, age: 21}
      ]})
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {
    const style = {
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Let's GO!</h1>
        <button
        style={style}
        onClick={this.togglePeopleHandler}>Toggle People</button>
        {
          this.state.showPeople ? 
          <div>
          <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}>My hobbie is: Ice-Skating</Person>
          <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click = {this.switchNameHandler.bind(this, "Jonathan")}
          changed = {this.nameChangeHandler}
          />
        </div> : null
        }
      </div>
    );
  }
}

export default App;
