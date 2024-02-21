import React, { useCallback } from "react";
import { ReactComponent as IconBack } from "../assets/images/icon-back.svg";
import "./HowToPlayPage.css";
import { howToPlayInfo } from "./HowToPlayPage.config";
import HowToPlayInfoCard from "../components/HowToPlayInfoCard";
import { useNavigate } from "react-router-dom";
import GoBackBanner from "../components/GoBackBanner";

const HowToPlayPage: React.FC = () => {
  const navigate = useNavigate();
  const handleIconBack = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div className="how-to-play-page">
      <GoBackBanner bannerTitle={"How to Play"} />
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
