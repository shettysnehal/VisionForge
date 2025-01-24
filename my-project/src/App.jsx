
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HiddenQRCodePage from "./pages/HiddenQRCodePage";
import AnotherPicPage from "./pages/AnotherpicPage";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HiddenQRCodePage />} />
        <Route path="/canuseeit" element={<AnotherPicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
