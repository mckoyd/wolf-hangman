import React, { useCallback } from "react";
import { ReactComponent as IconBack } from "../assets/images/icon-back.svg";
import { useNavigate } from "react-router-dom";

interface IGoBackBanner {
  bannerTitle: string;
}

const GoBackBanner: React.FC<IGoBackBanner> = ({ bannerTitle }) => {
  const navigate = useNavigate();
  const handleIconBack = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div className="nav-banner">
      <div className="icon-back-container">
        <IconBack className="icon-back" onClick={handleIconBack} />
      </div>
      <p className="title">{bannerTitle}</p>
    </div>
  );
};

export default GoBackBanner;
