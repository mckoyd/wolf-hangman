import React, { useCallback, useEffect } from "react";
import "./CategoryButton.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { wordState } from "../state/wordState";
import { useNavigate } from "react-router-dom";
import { categoryState } from "../state/categoryState";
import { dataState } from "../state/dataState";

interface ICategoryButton {
  category: string;
}

const CategoryButton: React.FC<ICategoryButton> = ({ category }) => {
  const navigate = useNavigate();
  const setWord = useSetRecoilState(wordState);
  const setCategory = useSetRecoilState(categoryState);

  const data = useRecoilValue(dataState);

  const getRandomIndex = useCallback(
    (limit: number) => Math.floor(Math.random() * limit),
    []
  );

  const handleCategoryClick = useCallback(() => {
    const categoryWords = data[category].filter(
      (wordObject) => wordObject.selected === false
    );
    const randomIndex = getRandomIndex(categoryWords.length);
    const wordSelection = categoryWords[randomIndex];

    setWord(wordSelection);
    setCategory(category);
    navigate("/game-board");
  }, [getRandomIndex, category, data, setWord, setCategory, navigate]);

  useEffect(() => {});
  return (
    <button
      type="button"
      className="category-btn"
      onClick={handleCategoryClick}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
