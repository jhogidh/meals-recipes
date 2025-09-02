import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { processIngredients } from "../utils/helpers";
import { ArrowLeftIcon, RefreshIcon, YoutubeIcon } from "./Icons";

export default function MealDetailDisplay({
  meal,
  onRefresh,
  showRefreshButton = false,
}) {
  const navigate = useNavigate();
  const ingredients = useMemo(() => processIngredients(meal), [meal]);

  if (!meal) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-amber-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading a delicious meal...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary mb-6 inline-flex items-center gap-2"
      >
        <ArrowLeftIcon /> Go Back
      </button>
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl shadow-amber-900/10">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:col-span-3">
            <span className="bg-amber-100 text-amber-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">
              {meal.strArea} Food
            </span>
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">
              {meal.strCategory}
            </span>

            <h1 className="text-4xl font-bold text-gray-800 mt-3">
              {meal.strMeal}
            </h1>
            <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">
              Ingredients
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {ingredients.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-800">{item.ingredient}</span>
                  <span className="text-gray-500 font-medium">
                    {item.measure}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Instructions
          </h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {showRefreshButton && (
            <button
              onClick={onRefresh}
              className="btn btn-primary flex items-center gap-2"
            >
              <RefreshIcon /> Get Another
            </button>
          )}
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-youtube flex items-center gap-2"
          >
            <YoutubeIcon /> Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
