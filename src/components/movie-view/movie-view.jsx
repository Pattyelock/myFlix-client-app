import React from "react";
import { useParams, Link } from "react-router-dom";
import "./movie-view.scss";

const MovieView = ({ movies }) => {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const movie = movies.find((movie) => movie._id === movieId); // Find the movie by ID

  if (!movie) {
    return <div>Movie not found. Please go back and select another movie.</div>;
  }

  return (
    <div className="movie-view">
      <h1>{movie.Title}</h1>
      <img 
        src={movie.ImageURL} 
        alt={`${movie.Title} Poster`} 
        className="movie-poster" 
      />
      <p>{movie.Description}</p>
      <p>Genre: {movie.Genre ? movie.Genre.Name : "Unknown"}</p>
      <p>Director: {movie.Director ? movie.Director.Name : "Unknown"}</p>
      <Link to="/" className="go-back-link">
        <p>Go Back</p>
      </Link>
    </div>
  );
};

export default MovieView;
