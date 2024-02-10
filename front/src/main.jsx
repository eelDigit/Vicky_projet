import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
