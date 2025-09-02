import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Komponen untuk Halaman Pencarian Makanan
export default function SearchMeal() {
  const [meals, setMeals] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Hook untuk navigasi

  async function searchMealAPI() {
    if (query.trim() === "") {
      setMeals([]);
      return;
    }
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setMeals(data.meals || []); // Set ke array kosong jika tidak ada hasil
    } catch (error) {
      console.error("Failed to fetch meals:", error);
      setMeals([]); // Set ke array kosong jika ada error
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchMealAPI();
  }

  // Fungsi untuk menavigasi ke halaman detail
  function handleViewDetails(mealId) {
    navigate(`/meal/${mealId}`);
  }

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Search for a Meal
      </h1>
      <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Arrabiata"
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">
                  {meal.strMeal}
                </h2>
                <button
                  onClick={() => handleViewDetails(meal.idMeal)}
                  className="mt-4 w-full px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Type something to find a meal.
          </p>
        )}
        {meals && meals.length === 0 && query && (
          <p className="col-span-full text-center text-gray-500">
            No meals found for "{query}".
          </p>
        )}
      </div>
    </div>
  );
}
