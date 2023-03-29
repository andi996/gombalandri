import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Galaxy from "./pages/Galaxy";
import Launch from "./pages/Launch";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="galaxy" element={<Galaxy />} />
        <Route path="launch" element={<Launch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
