import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button `
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
`;


class App extends Component {
  state = {
    people: [
      { id: 'asd21', name: 'Max', age: 27},
      { id: 'awe21', name: 'John', age: 19},
      { id: 'ope12', name: 'Olic', age: 28}
    ],
    showPeople: false
  }

  deletePersonHandler = (personIndex) => {
    //const people = this.state.people.slice(); without params => copies the original array. or use spread
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.people.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    };

    //const person = Object.assign({}, this.state.people[personIndex]);   alternative

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState( {people: people} );
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      /*style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }*/
    }

    let classes = [];
    if(this.state.people.length <= 2){
      classes.push('red');
    }
    if(this.state.people.length <= 1){
      classes.push('bold');
    }


    return (
        <div className="App">
          <h1>Let's GO!</h1>
          <p className={classes.join(' ')}>This should work</p>
          <StyledButton alt={this.state.showPeople} onClick={this.togglePeopleHandler}>
            Toggle People
          </StyledButton>
          {people}
        </div>
    );
  }
}

export default App;  //higher order component
