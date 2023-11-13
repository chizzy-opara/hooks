import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, filterMovies }) {
  const titleFilter = "title";
  const rateFilter = 0;

  const filteredMovies = filterMovies(titleFilter, rateFilter);

  return (
    <div>
      <h2>Movie List</h2>
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
