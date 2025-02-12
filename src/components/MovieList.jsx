import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch movies from the backend
    axios
      .get("http://localhost:8080/movies")
      .then((response) => {
        console.log("Fetched movies:", response.data); // Log data
        setMovies(response.data); // Update state
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>My Movie App</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie._id} className="movie-card">
              <h2>{movie.Title}</h2>
              <img
                src={movie.ImagePath}
                alt={movie.Title}
                onError={(e) => {
                  e.target.src = "/images/default.jpg"; // Fallback image
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
