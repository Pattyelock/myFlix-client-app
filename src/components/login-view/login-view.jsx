// import "./login-view.scss";
// import React, { useState } from "react";
// export const LoginView = ({ onLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Make API call to log in

//     const data = {
//       access: username,
//       secret: password,
//     };
//     fetch("https://movie-api-main-2-81ab4bbd4cbf.herokuapp.com/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ Username: username, Password: password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("user", JSON.stringify(data.user));
//           onLoggedIn(data.user, data.token);
//         } else {
//           setErrorMessage("Invalid username or password");
//         }
//       })
//       .catch(() => {
//         setErrorMessage("An error occurred. Please try again.");
//       });
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
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://movie-api-main-2-81ab4bbd4cbf.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setErrorMessage("Invalid username or password");
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          onLoggedIn(data.user, data.token);
        }
        console.log(data);
      })
      .catch((e) => {
        console.error("Error during login:", e);
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

      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
