import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileView() {
  //const [user, setUser] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const email = JSON.parse(localStorage.getItem("email"));

  if (!user) return <div>Loading...</div>;
  console.log(user);
  
    return (
    <div className="profile-view">
      <h2>User Profile</h2>
      <div>
        <h3>Registration Details</h3>
        <p><strong>Username:</strong> {user.Username}</p>
        <p><strong>Email:</strong> {user.Email}</p>
        <p><strong>Date of Birth:</strong> {new Date(user.Birthday).toLocaleDateString()}</p>
      </div>

      <div>
        <h3>Favorite Movies</h3>
        <ul>
          {favoriteMovies.length === 0 ? (
            <p>You have no favorite movies yet.</p>
          ) : (
            favoriteMovies.map((movie) => (
              <li key={movie._id}>
                <span>{movie.title}</span>
                {/* <button onClick={() => handleRemoveFavorite(movie._id)}>Remove from Favorites</button> */}
              </li>
            ))
          )}
        </ul>
      </div>

      <div>
        {/* <button onClick={handleDeregister}>Deregister</button> */}
      </div>
    </div>
  );
}

export default ProfileView;
