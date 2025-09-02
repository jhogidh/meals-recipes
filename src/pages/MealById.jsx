import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Komponen untuk Halaman Detail Makanan berdasarkan ID
export default function MealById() {
  const [meal, setMeal] = useState(null);
  const { mealId } = useParams(); // Mengambil mealId dari URL

  useEffect(() => {
    async function getMealById() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error("Failed to fetch meal by ID:", error);
      }
    }
    if (mealId) {
      getMealById();
    }
  }, [mealId]); // Jalankan ulang effect jika mealId berubah

  if (!meal) {
    return <div className="text-center p-10">Loading details...</div>;
  }

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {meal.strMeal}
        </h2>
        <div className="md:flex md:gap-6">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0"
          />
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {meal.strInstructions}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={() => window.open(meal.strYoutube, "_blank")}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow"
          >
            Watch on YouTube
          </button>
        </div>
      </div>
    </div>
  );
}
