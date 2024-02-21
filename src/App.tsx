import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import "./App.css";
import HowToPlayPage from "./pages/HowToPlayPage";

const App: React.FC = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="how-to-play" element={<HowToPlayPage />} />
      </Routes>
    </div>
  );
};

export default App;
