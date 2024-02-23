import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as GameTitle } from "../assets/images/game-title.svg";
import { ReactComponent as IconPlay } from "../assets/images/icon-play.svg";
import GenButton from "../components/GenButton";

import "./MenuPage.css";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const handleHowToPlayButton = useCallback(
    () => navigate("/how-to-play"),
    [navigate]
  );
  const handlePlayButton = useCallback(() => navigate("/category"), [navigate]);

  return (
    <div className="main-card">
      <GameTitle className="game-title" />
      <div className="icon-container">
        <IconPlay className="icon-play" onClick={handlePlayButton} />
      </div>
      <GenButton
        buttonClass="how-to-play-btn"
        handler={handleHowToPlayButton}
        buttonText="How To Play"
      />
    </div>
  );
};

export default MenuPage;
