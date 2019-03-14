import React from 'react';
import * as peopleAPI from '../api/people';

class Characters extends React.Component { 
  state = {
    people: [],
    isLoaded: false
  };
  
  async componentDidMount() {
    const people = await peopleAPI.getAll();
    this.setState({
      people,
      isLoaded: true
    });
    // console.log(this.state.people);
  }

  render() {
    const { people, isLoaded } = this.state;

    return (
      <div className="Characters">
        Characters
        { isLoaded ? (
          <ul>
            {people.map(person => <li key={person.name}>{person.name}</li>)}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}

export default Characters;