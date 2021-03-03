import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 'asd21' ,name: 'Max', age: 27},
      { id: 'awe21' ,name: 'John', age: 19}
    ],
    showPeople: false
  }

  deletePersonHandler = (personIndex) => {
    //const people = this.state.people.slice(); without params => copies the original array. or use spread
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
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

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Let's GO!</h1>
        <button
        style={style}
        onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
      </div>
    );
  }
}

export default App;
