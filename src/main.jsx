import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Menu />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
