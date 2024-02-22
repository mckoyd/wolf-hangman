import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconHeart } from "../assets/images/icon-heart.svg";
import "./GameBoardPage.css";
import { useRecoilValue } from "recoil";
import { wordState } from "../state/wordState";

const GameBoardPage: React.FC = () => {
  const [remainingLife, setRemainingLife] = useState<number>(100);
  const word = useRecoilValue(wordState);
  const getLetters = useCallback(
    () => word.name.toUpperCase().replace(/\s/g, "").split(""),
    [word]
  );
  const generateLettersUsedMap = useCallback(
    () =>
      getLetters().reduce((lettersMap, currentLetter) => {
        if (!lettersMap[currentLetter]) {
          lettersMap[currentLetter] = true;
        }
        return lettersMap;
      }, {} as { [key: string]: boolean }),
    []
  );

  const generateTileLines = useCallback(
    () => word.name.toUpperCase().split(" "),
    [word]
  );

  const generateTiles = useCallback(
    () =>
      generateTileLines().map((tileLine, index) => (
        <div className="tile-line" key={`${index}`}>
          {tileLine.split("").map((tileLetter, index) => (
            <span key={`${tileLetter}-${index}`} className="blank-tile"></span>
          ))}
        </div>
      )),
    []
  );

  const generateAlphabet = useCallback(
    () =>
      [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ].map((letter, index) => (
        <span key={`${letter}-alphabet-${index}`} className="alphabet-tile">
          {letter}
        </span>
      )),
    []
  );

  useEffect(() => {
    console.log(
      "Letters",
      getLetters(),
      "LettersUsed",
      generateLettersUsedMap()
    );
  }, [getLetters, generateLettersUsedMap]);

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
      <div className="alphabet-tiles">{generateAlphabet()}</div>
    </div>
  );
};

export default GameBoardPage;
