import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import "./App.css";
import HowToPlayPage from "./pages/HowToPlayPage";

const App: React.FC = () => {
  return (
    <div className="main">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="how-to-play" element={<HowToPlayPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
