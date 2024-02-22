import React, { useCallback } from "react";
import "./CategoryButton.css";
import { data } from "../pages/CategoryPage.config";
import { useSetRecoilState } from "recoil";
import { wordState } from "../state/wordState";
import { useNavigate } from "react-router-dom";

interface ICategoryButton {
  category: string;
}

const CategoryButton: React.FC<ICategoryButton> = ({ category }) => {
  const navigate = useNavigate();
  const setWord = useSetRecoilState(wordState);

  const getRandomIndex = useCallback(
    (limit: number) => Math.floor(Math.random() * limit),
    []
  );

  const handleCategoryClick = useCallback(() => {
    const randomIndex = getRandomIndex(data[category].length);
    const wordSelection = data[category][randomIndex];

    setWord(wordSelection);
    navigate("/game-board");
  }, [getRandomIndex, category, setWord, navigate]);

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
