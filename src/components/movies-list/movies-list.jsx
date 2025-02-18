import React from "react";
import { useSelector } from "react-redux";  // Import useSelector to access Redux state
import MovieCard from "../movie-card/movie-card";  // Fix default import
import { MoviesFilter } from "../movies-filter/movies-filter";  // Import MoviesFilter
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.list);  // Access movies list from Redux state
  const filter = useSelector((state) => state.movies.filter).trim().toLowerCase();  // Access filter from Redux state

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter)  // Apply filter to the list of movies
  );

  return (
    <>
      <Row>
        <MoviesFilter />  {/* Display the search bar */}
      </Row>
      <Row>
        {filteredMovies.length === 0 ? (  // Check if there are no filtered movies
          <Col>The list is empty!</Col>
        ) : (
          filteredMovies.map((movie) => (
            <Col className="mb-4" key={movie.id || movie._id} md={3}>  {/* Ensure correct unique key */}
              <MovieCard movie={movie} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default MoviesList;  // Fix: Export MoviesList as default
