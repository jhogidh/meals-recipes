import React, { useEffect, useState } from "react";

// Komponen untuk Halaman Makanan Acak
export default function RandomMeal() {
  const [meal, setMeal] = useState(null);

  async function getRandomMeal() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Failed to fetch random meal:", error);
    }
  }

  useEffect(() => {
    getRandomMeal();
  }, []);

  if (!meal) {
    return <div className="text-center p-10">Loading a delicious meal...</div>;
  }

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Meal of the Moment
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            onClick={getRandomMeal}
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow"
          >
            Get Another Meal
          </button>
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
