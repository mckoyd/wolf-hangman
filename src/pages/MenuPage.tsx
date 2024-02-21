import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as GameTitle } from "../assets/images/game-title.svg";
import { ReactComponent as IconPlay } from "../assets/images/icon-play.svg";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  const handleHowToPlayButton = useCallback(
    () => navigate("/how-to-play"),
    [navigate]
  );
  const handlePlayButton = useCallback(() => {}, []);
  return (
    <div className="main-card">
      <GameTitle className="game-title" />
      <div className="icon-container">
        <IconPlay className="icon-play" onClick={handlePlayButton} />
      </div>
      <button
        type="button"
        className="button how-to-play"
        onClick={handleHowToPlayButton}
      >
        How To Play
      </button>
    </div>
  );
};

export default MenuPage;
