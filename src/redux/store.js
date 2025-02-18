// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";  // Import the moviesReducer from the movies slice
import userReducer from './reducers/user';


export const store = configureStore({
  reducer: {
    movies: moviesReducer,   // Movies state is managed by moviesReducer
    user: userReducer        // User state is managed by userReducer
  }
});
