import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FullGallery from "./pages/FullGallery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<FullGallery />} />

      </Routes>
    </Router>
  );
};

export default App;
