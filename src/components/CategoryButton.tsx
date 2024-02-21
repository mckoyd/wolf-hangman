import React from "react";
import "./CategoryButton.css";

interface ICategoryButton {
  category: string;
}

const CategoryButton: React.FC<ICategoryButton> = ({ category }) => {
  return (
    <button type="button" className="category-btn">
      {category}
    </button>
  );
};

export default CategoryButton;
