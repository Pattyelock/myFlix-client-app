// src/components/navigation-bar/navigation-bar.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";

export const NavigationBar = () => {
  const user = useSelector((state) => state.user); // Get user from Redux
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="brand-logo">Movie App</div>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={() => dispatch(setUser(null))}>Logout</button>
          </>
        ) : (
          <span>Login or Sign up</span>
        )}
      </div>
    </nav>
  );
};
