import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconHeart } from "../assets/images/icon-heart.svg";
import "./GameBoardPage.css";
import { useRecoilValue } from "recoil";
import { wordState } from "../state/wordState";
import { alphabet } from "./GameBoardPage.config";
import { categoryState } from "../state/categoryState";
import { useNavigate } from "react-router-dom";
import GenButton from "../components/GenButton";

const GameBoardPage: React.FC = () => {
  const navigate = useNavigate();

  const word = useRecoilValue(wordState);
  const category = useRecoilValue(categoryState);

  const [remainingLife, setRemainingLife] = useState<number>(100);
  const [showPauseMenu, setShowPauseMenu] = useState<boolean>(false);
  const [showGameResult, setShowGameResult] = useState<boolean>(false);
  const [gameResult, setGameResult] = useState<string>("");
  const [lettersUsed, setLettersUsed] = useState<{ [key: string]: boolean }>();
  const [lettersChosen, setLettersChosen] = useState<{
    [key: string]: boolean;
  }>();

  const [remainingLetters, setRemainingLetters] = useState<string>(
    word.name.toLowerCase().replace(/\s/g, "")
  );

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
            if (!event.currentTarget.classList.contains("used-letter")) {
              setLettersChosen((prev) => ({ ...prev, [letter]: true }));
              event.currentTarget.classList.add("used-letter");
              const letterRegExp = new RegExp(`${letter.toLowerCase()}`, "g");
              setRemainingLetters((curr) => curr.replace(letterRegExp, ""));
              if (lettersUsed && !lettersUsed[letter]) {
                setRemainingLife((currentLife) => currentLife - 100 * (1 / 8));
              }
            }
          }}
        >
          {letter}
        </span>
      )),
    [lettersUsed]
  );

  const handleMenuClick = useCallback(() => {
    setShowPauseMenu(true);
  }, []);

  const handleContinueButton = useCallback(() => {
    setShowPauseMenu(false);
  }, []);

  const handleNewCategoryButton = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  const handleQuitButton = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    setLettersUsed(generateLettersUsedMap());
  }, [generateLettersUsedMap]);

  useEffect(() => {
    if (remainingLife === 0) {
      setShowGameResult(true);
      setGameResult("You Lose");
    }
  }, [remainingLife]);

  useEffect(() => {
    if (remainingLetters === "") {
      setShowGameResult(true);
      setGameResult("You Win");
    }
  }, [remainingLetters]);

  return (
    <div className="game-board-page">
      <div className="title-banner">
        <div className="banner-left">
          <div className="icon-menu-container">
            <IconMenu className="icon-menu" onClick={handleMenuClick} />
          </div>
          <p className="banner-title">{category}</p>
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
      {(showPauseMenu || showGameResult) && (
        <>
          <div className="pause-overlay"></div>
          <div className="pause-menu-modal">
            <p className="pause-title">
              {showPauseMenu ? "Paused" : gameResult}
            </p>
            <div className="pause-btns">
              <GenButton
                buttonClass="pause-btn-opt"
                buttonText="Continue"
                handler={handleContinueButton}
              />
              <GenButton
                buttonClass="pause-btn-opt"
                buttonText="New Category"
                handler={handleNewCategoryButton}
              />
              <GenButton
                buttonClass="pause-btn-opt quit"
                buttonText="Quit Game"
                handler={handleQuitButton}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GameBoardPage;
