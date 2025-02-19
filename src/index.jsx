import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import MainView from "./components/main-view/main-view";

// Find the root element in the DOM
const container = document.getElementById("root");
const root = createRoot(container);

const MyFlix = () => (
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
);

root.render(<MyFlix />);
