import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row, Card } from "react-bootstrap";

export const MovieView = () => {
  // Get movie ID from URL parameters
  const { movieId } = useParams();
  
  // Get the movie details from Redux store by matching the movieId
  const movie = useSelector((state) =>
    state.movies.list.find((movie) => movie.id === movieId)
  );

  // If the movie is not found, display a fallback message
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <Row>
      <Col md={8}>
        <Card>
          <Card.Img variant="top" src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MovieView;
