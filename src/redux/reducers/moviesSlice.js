import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies", // Slice name is movies
  initialState: [],
  reducers: {
    setMovies: (state, action) => {
      return action.payload; // The payload is the movie list fetched from the API
    }
  }
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
