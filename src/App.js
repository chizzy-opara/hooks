import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller.",
      posterURL: "/images.jpeg",
      rating: 5,
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = (titleFilter, rateFilter) => {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= rateFilter
    );
  };

  return (
    <div>
      <h1>Movie App</h1>
      <Filter addMovie={addMovie} />
      <MovieList movies={movies} filterMovies={filterMovies} />
    </div>
  );
}

export default App;
