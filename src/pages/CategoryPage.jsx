import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MealCard from "../components/MealCard.jsx";
import { ArrowLeftIcon } from "../components/Icons.jsx";

export default function CategoryPage() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchMealsByCategory = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Failed to fetch category meals:", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMealsByCategory();
  }, [name]);

  return (
    <div className="animate-fade-in">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-teal-600 font-semibold mb-6 hover:underline"
      >
        <ArrowLeftIcon />
        Kembali
      </Link>
      <h2 className="text-3xl font-bold mb-6">Kategori: {name}</h2>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <MealCard.Skeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal, index) => (
            <MealCard key={meal.idMeal} meal={meal} staggerIndex={index} />
          ))}
        </div>
      )}
    </div>
  );
}
