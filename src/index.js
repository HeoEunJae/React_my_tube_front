import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./routes/About";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="flex gap-2">
        <span>
          <Link to="/1">App</Link>
        </span>
        <span>
          <Link to="/Home/2">Home</Link>
        </span>
        <span>
          <Link to="/About/3">About</Link>
        </span>
      </div>
      <Routes>
        <Route path="/:id" element={<App />}></Route>
        <Route path="/home/:id" element={<Home />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
