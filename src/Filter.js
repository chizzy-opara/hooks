import React, { useState } from "react";

function Filter({ addMovie }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const handleAddMovie = () => {
    const newMovie = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      posterURL: document.getElementById("posterURL").value,
      rating: parseInt(document.getElementById("rating").value),
    };

    addMovie(newMovie);
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <label>
        Title:
        <input type="text" id="title" />
      </label>
      <br />
      <label>
        Description:
        <input type="text" id="description" />
      </label>
      <br />
      <label>
        Poster URL:
        <input type="text" id="posterURL" />
      </label>
      <br />
      <label>
        Rating:
        <input type="number" id="rating" min="1" max="5" />
      </label>
      <br />
      <button onClick={handleAddMovie}>Add Movie</button>
      <hr />
      <h2>Filter Movies</h2>
      <label>
        Title Filter:
        <input
          type="text"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </label>
      <br />
      <label>
        Rate Filter:
        <input
          type="number"
          value={rateFilter}
          onChange={(e) => setRateFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Filter;
