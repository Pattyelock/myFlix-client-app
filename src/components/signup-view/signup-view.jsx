// import "./signup-view.scss"; // Import the SCSS file for the styles
// import React, { useState } from "react";

// export const SignupView = ({ onSignedUp }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthday, setBirthday] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Make API call to sign up
//     fetch("https://movie-api-main-2-81ab4bbd4cbf.herokuapp.com/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         Username: username,
//         Password: password,
//         Email: email,
//         Birthday: birthday,
//       }),
//     }).then((response) => {
//       if (response.ok) {
//         alert("Sign-up successful! Please log in.");
//         window.location.href = "/login";
//       } else {
//         alert("Sign-up failed! Please try again.");
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Birthday:
//         <input
//           type="date"
//           value={birthday}
//           onChange={(e) => setBirthday(e.target.value)}
//         />
//       </label>
//       <button type="submit">Sign Up</button>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </form>
//   );
// };

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://movie-api-main-2-81ab4bbd4cbf.herokuapp.com/movies/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setErrorMessage("Signup failed");
          throw new Error("Signup failed");
        }
        alert("Signup successful");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Something went wrong during signup");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </Form.Group>

      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
