import React from "react";
import { IHowToPlayInfo } from "../pages/HowToPlayPage.config";

import "./HowToPlayInfoCard.css";

const HowToPlayInfoCard: React.FC<IHowToPlayInfo> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="info-card">
      <div className="info-header">
        <p className="info-number">{number}</p>
        <p className="info-title">{title}</p>
      </div>
      <p className="info-desc">{description}</p>
    </div>
  );
};

export default HowToPlayInfoCard;
