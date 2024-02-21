import React from "react";
import { ReactComponent as IconBack } from "../assets/images/icon-back.svg";
import "./HowToPlayPage.css";

const HowToPlayPage: React.FC = () => {
  return (
    <div className="how-to-play-page">
      <div className="nav-banner">
        <div className="icon-back-container">
          <IconBack className="icon-back" />
        </div>

        <p className="title">How to Play</p>
      </div>
    </div>
  );
};

export default HowToPlayPage;
