import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconHeart } from "../assets/images/icon-heart.svg";
import "./GameBoardPage.css";
import { useRecoilValue } from "recoil";
import { wordState } from "../state/wordState";

const GameBoardPage: React.FC = () => {
  const [remainingLife, setRemainingLife] = useState<number>(100);
  const word = useRecoilValue(wordState);

  const generateTileLines = useCallback(() => word.name.split(" "), [word]);
  const generateTiles = useCallback(
    () =>
      generateTileLines().map((tileLine, index) => (
        <div className="tile-line" key={`${index}`}>
          {tileLine.split("").map((tileLetter, index) => (
            <span className="tile"></span>
          ))}
        </div>
      )),
    []
  );

  useEffect(() => {
    console.log(word);
    console.log("generation", generateTiles());
  });

  return (
    <div className="game-board-page">
      <div className="title-banner">
        <div className="banner-left">
          <div className="icon-menu-container">
            <IconMenu className="icon-menu" />
          </div>
          <p className="banner-title">Countries</p>
        </div>
        <div className="banner-right">
          <div className="life-span">
            <span
              className="life-bar"
              style={{ width: `${remainingLife}%` }}
            ></span>
          </div>
          <IconHeart className="icon-heart" />
        </div>
      </div>
      <div className="game-tiles">{generateTiles()}</div>
    </div>
  );
};

export default GameBoardPage;
