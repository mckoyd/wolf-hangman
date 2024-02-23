import React, { useCallback, useEffect, useState } from "react";
import { IHowToPlayInfo } from "../pages/HowToPlayPage.config";

import "./HowToPlayInfoCard.css";

const InfoCardMobile: React.FC<IHowToPlayInfo> = ({
  number,
  title,
  description,
}) => {
  return (
    <>
      <div className="info-header">
        <p className="info-number">{number}</p>
        <p className="info-title">{title}</p>
      </div>
      <p className="info-desc">{description}</p>
    </>
  );
};

const InfoCard: React.FC<IHowToPlayInfo> = ({ number, title, description }) => {
  return (
    <>
      <p className="info-number">{number}</p>
      <div className="info-details">
        <p className="info-title">{title}</p>
        <p className="info-desc">{description}</p>
      </div>
    </>
  );
};

const HowToPlayInfoCard: React.FC<IHowToPlayInfo> = ({
  number,
  title,
  description,
}) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  const updateScreenSize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [screenSize]);

  return (
    <div className="info-card">
      {screenSize <= 640 && (
        <InfoCardMobile
          number={number}
          title={title}
          description={description}
        />
      )}
      {screenSize > 640 && (
        <InfoCard number={number} title={title} description={description} />
      )}
    </div>
  );
};

export default HowToPlayInfoCard;
