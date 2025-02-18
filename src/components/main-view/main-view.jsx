import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import MovieView from "../movie-view/movie-view";
import ProfileView from "../profile-view/profile-view";
import MoviesList from "../movies-list/movies-list";
import { setMovies } from "../../redux/reducers/movies";
import { MoviesFilter } from "../movies-filter/movies-filter";

export const MainView = () => {
  const dispatch = useDispatch();

  // Get user & token from Redux (remove local state)
  const user = useSelector((state) => state.user); 
  const token = useSelector((state) => state.user?.token); 

  //  Get movies from Redux
  const movies = useSelector((state) => state.movies.list || []); // Ensure movies is an array
  const filter = useSelector((state) => state.filter || ""); // Get filter from Redux

  useEffect(() => {
    if (!token) return;

    fetch("https://movie-api-main-2-81ab4bbd4cbf.herokuapp.com/movies", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache", // Fix API caching issue
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setMovies(data)); // ✅ Store movies correctly
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [token, dispatch]);

  //  Filter movies correctly (only if movies exist)
  const filteredMovies = movies.length
    ? movies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()))
    : [];

  //  Fix authentication logic (use Redux `user`)
  if (!user || !token) {
    return (
      <div className="auth-container">
        <LoginView />
        <span className="separator">or</span>
        <SignupView />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <Row className="justify-content-md-center">
        <MoviesFilter />
        <Routes>
          <Route path="/signup" element={<SignupView />} />
          <Route path="/login" element={<LoginView />} />
          <Route
            path="/profile"
            element={!user ? <Navigate to="/login" replace /> : <Col md={8}><ProfileView /></Col>}
          />
          <Route
            path="/movies/:movieId"
            element={
              !filteredMovies.length ? (
                <Col>The list is empty!</Col>
              ) : (
                <Col md={8}><MovieView /></Col>
              )
            }
          />
          <Route
            path="/"
            element={
              !filteredMovies.length ? (
                <Col>The list is empty!</Col>
              ) : (
                <MoviesList movies={filteredMovies} />
              )
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};

export default MainView;
