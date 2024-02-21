import React, { useCallback } from "react";
import { ReactComponent as IconBack } from "../assets/images/icon-back.svg";
import "./HowToPlayPage.css";
import { howToPlayInfo } from "./HowToPlayPage.config";
import HowToPlayInfoCard from "../components/HowToPlayInfoCard";
import { useNavigate } from "react-router-dom";

const HowToPlayPage: React.FC = () => {
  const navigate = useNavigate();
  const handleIconBack = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <div className="how-to-play-page">
      <div className="nav-banner">
        <div className="icon-back-container">
          <IconBack className="icon-back" onClick={handleIconBack} />
        </div>

        <p className="title">How to Play</p>
      </div>
      {howToPlayInfo.map((infoObject, index) => (
        <HowToPlayInfoCard
          key={`${infoObject.title}-${index}}`}
          number={infoObject.number}
          title={infoObject.title}
          description={infoObject.description}
        />
      ))}
    </div>
  );
};

export default HowToPlayPage;
