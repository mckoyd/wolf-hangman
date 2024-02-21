import React from "react";
import { howToPlayInfo } from "./HowToPlayPage.config";
import HowToPlayInfoCard from "../components/HowToPlayInfoCard";
import GoBackBanner from "../components/GoBackBanner";
import "./HowToPlayPage.css";

const HowToPlayPage: React.FC = () => {
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
