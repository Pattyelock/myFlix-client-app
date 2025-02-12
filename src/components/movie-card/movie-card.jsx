// // components/main-view/main-view.js
// import React from "react";
// import "../main-view/main-view.scss";

// const MovieCard = ({ movie }) => {
//   return (
//     <>
//       <div>{movie?.Title}</div>
//     </>
//   );
// };

// export default MovieCard;

import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      {}
      <Link to={`/movies/${movie._id}`} className="text-decoration-none">
        <Card.Img variant="top" src={movie.ImageURL} className="w-100" />
        <Card.Body>
          <Card.Title>{movie?.Title}</Card.Title>
          <Card.Text>{movie?.Description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     director: PropTypes.string,
//     genre: PropTypes.string,
//   }).isRequired,
// };

export default MovieCard;
