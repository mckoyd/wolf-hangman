import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import "./App.css";
import HowToPlayPage from "./pages/HowToPlayPage";
import CategoryPage from "./pages/CategoryPage";
import GameBoardPage from "./pages/GameBoardPage";

const App: React.FC = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/game-board" element={<GameBoardPage />} />
      </Routes>
    </div>
  );
};

export default App;
