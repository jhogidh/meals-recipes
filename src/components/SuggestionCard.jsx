import React from "react";
import { Link } from "react-router-dom";
import { FoodPlateIllustration } from "../components/Illustrations";

export default function SuggestionCard({ meal }) {
  if (!meal) return null;
  return (
    <Link
      to={`/meal/${meal.idMeal}`}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row group animate-fade-in"
    >
      <div className="md:w-1/3 bg-teal-50 p-6 flex items-center justify-center">
        <FoodPlateIllustration className="w-full h-full max-w-[150px] md:max-w-none" />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3">
        <p className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
          Inspirasi Hari Ini
        </p>
        <h3 className="block mt-1 text-2xl md:text-3xl leading-tight font-extrabold text-black group-hover:text-teal-600 transition-colors">
          {meal.strMeal}
        </h3>
        <p className="mt-2 text-slate-500">
          {meal.strCategory} • {meal.strArea}
        </p>
        <span className="mt-4 inline-block font-semibold text-teal-600 group-hover:underline">
          Lihat Resep &rarr;
        </span>
      </div>
    </Link>
  );
}
