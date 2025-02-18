import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieView from "./components/movie-view/movie-view";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/movies" element={<MovieView />} />
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
