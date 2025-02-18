// src/redux/reducers/movies.js
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    filter: "", // For the search functionality
  },
 
  },
);

export const { setMovies, setFilter } = moviesSlice.actions;
export default moviesSlice.reducer;
