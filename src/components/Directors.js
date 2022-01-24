import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => <div className="actor">{director.name} has directed {director.movies.join()}</div>)}
    </div>
  );
}

export default Directors
