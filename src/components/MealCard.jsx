import React from "react";
import { useNavigate } from "react-router-dom";

export const MealCard = ({ meal }) => {
  const navigate = useNavigate();
  return (
    <div className="card-item" onClick={() => navigate(`/meal/${meal.idMeal}`)}>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
        {meal.strMeal}
      </h3>
    </div>
  );
};

export const SkeletonCard = () => (
  <div className="bg-gray-200 rounded-2xl h-72 animate-shimmer"></div>
);
