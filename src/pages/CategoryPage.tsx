import React from "react";
import GoBackBanner from "../components/GoBackBanner";
import "./CategoryPage.css";
import { categories } from "./CategoryPage.config";
import CategoryButton from "../components/CategoryButton";

const CategoryPage: React.FC = () => {
  return (
    <div className="category-page">
      <GoBackBanner bannerTitle="Pick a Category" />
      <div className="categories">
        {categories.map((category, index) => (
          <CategoryButton category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
