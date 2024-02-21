import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import "./App.css";
import HowToPlayPage from "./pages/HowToPlayPage";
import CategoryPage from "./pages/CategoryPage";

const App: React.FC = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
