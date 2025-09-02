import React from "react";
import { Link } from "react-router-dom";

export default function MealCard({ meal, staggerIndex }) {
  const animationDelay = { animationDelay: `${staggerIndex * 75}ms` };
  return (
    <Link
      to={`/meal/${meal.idMeal}`}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group animate-fade-in"
      style={animationDelay}
    >
      <div className="overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-bold text-slate-800 leading-tight">
          {meal.strMeal}
        </h3>
        {meal.strCategory && (
          <p className="text-sm text-slate-500 mt-1">{meal.strCategory}</p>
        )}
      </div>
    </Link>
  );
}

MealCard.Skeleton = () => (
  <div className="bg-slate-200 rounded-2xl h-60 animate-pulse"></div>
);
