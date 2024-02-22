import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconHeart } from "../assets/images/icon-heart.svg";
import "./GameBoardPage.css";
import { useRecoilValue } from "recoil";
import { wordState } from "../state/wordState";
import { alphabet } from "./GameBoardPage.config";

const GameBoardPage: React.FC = () => {
  const [remainingLife, setRemainingLife] = useState<number>(100);
  const [lettersUsed, setLettersUsed] = useState<{ [key: string]: boolean }>();
  const [lettersChosen, setLettersChosen] = useState<{
    [key: string]: boolean;
  }>();
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
    [getLetters]
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
            <span
              key={`${tileLetter}-${index}`}
              className={
                lettersChosen && lettersChosen[tileLetter]
                  ? "answer-tile"
                  : "blank-tile"
              }
            >
              {lettersChosen && lettersChosen[tileLetter] && tileLetter}
            </span>
          ))}
        </div>
      )),
    [generateTileLines, lettersChosen]
  );
  const generateAlphabet = useCallback(
    () =>
      alphabet.map((letter, index) => (
        <span
          key={`${letter}-alphabet-${index}`}
          className="alphabet-tile"
          onClick={(event) => {
            setLettersChosen((prev) => ({ ...prev, [letter]: true }));
            event.currentTarget.classList.toggle("used-letter");
            if (lettersUsed && !lettersUsed[letter]) {
              setRemainingLife((currentLife) => currentLife - 100 * (1 / 8));
            }
          }}
        >
          {letter}
        </span>
      )),
    [lettersUsed]
  );

  useEffect(() => {
    setLettersUsed(generateLettersUsedMap());
  }, [generateLettersUsedMap]);

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
