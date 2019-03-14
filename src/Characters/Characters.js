import React from 'react';
import * as peopleAPI from '../api/people';
import Pagination from '../Common/Pagination';

class Characters extends React.Component { 
  state = {
    people: [],
    isLoaded: false,
    page: 1,
    count: 0
  };
  
  async componentDidMount() {
    const peopleData = await peopleAPI.getAll();
    const count = peopleData.count;
    const people = peopleData.results;

    this.setState({
      people: people,
      isLoaded: true,
      count: count
    });
  }

  render() {
    const { people, isLoaded, count, page } = this.state;

    return (
      <div className="Characters">
        Characters
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <ul>
              {people.map(person => <li key={person.name}>{person.name}</li>)}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}

export default Characters;