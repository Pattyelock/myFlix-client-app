// src/redux/reducers/user.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // initial state is null (no user logged in)
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // set the user from the action payload
    }
  }
});

// Export the action and the reducer
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
