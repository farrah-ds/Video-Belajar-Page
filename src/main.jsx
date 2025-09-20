import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importing the main App component
import "./index.css"; // Import global styles, including TailwindCSS setup

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);
