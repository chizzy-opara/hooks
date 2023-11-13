import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
