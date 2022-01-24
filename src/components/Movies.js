import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
      {movies.map((movie) => <div className="movie">{movie.title} has {movie.time} showing times and has a score of {movie.metascore}. Genres: {movie.genres.join()}</div>)}
    </div>
  );
};

export default Movies;
