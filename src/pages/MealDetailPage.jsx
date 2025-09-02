import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { processIngredients } from "../utils/helpers.jsx";
import { YoutubeIcon } from "../components/Icons.jsx";

export default function MealDetailPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealDetail = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setMeal(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Failed to fetch meal detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMealDetail();
  }, [id]);

  if (loading) return <div className="text-center p-8">Memuat resep...</div>;
  if (!meal)
    return <div className="text-center p-8">Resep tidak ditemukan.</div>;

  const ingredients = processIngredients(meal);
  const instructions = meal.strInstructions
    .split("\n")
    .filter((p) => p && p.trim() !== "");

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
      <img
        className="h-64 md:h-80 w-full object-cover"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <div className="p-6 md:p-8">
        {/* Header Resep */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
              {meal.strCategory} • {meal.strArea}
            </div>
            <h1 className="block mt-1 text-3xl md:text-4xl leading-tight font-extrabold text-black">
              {meal.strMeal}
            </h1>
          </div>
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              <YoutubeIcon />
              <span>Tonton Video</span>
            </a>
          )}
        </div>

        {/* Konten Utama: Bahan & Cara Memasak */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-teal-500 pb-2">
              Bahan-bahan
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-teal-500 pb-2">
              Cara Memasak
            </h2>
            <div className="prose max-w-none text-slate-700">
              {instructions.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
