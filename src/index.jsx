import React from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";/
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom"; // Ensure BrowserRouter is here
import "./index.scss";
import MainView from "./components/main-view/main-view";


const App = () => {
  return (
  // <Provider store={store}>
  <Container>
  <MainView />
  </Container>
  // {/* </Provider> */}
  );
  };