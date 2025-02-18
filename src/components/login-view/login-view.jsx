// src/components/login-view/login-view.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";

export const LoginView = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Assuming the username is validated
    dispatch(setUser({ username })); // Set the user in Redux
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
