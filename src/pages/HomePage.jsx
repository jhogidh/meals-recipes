import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../components/Icons";
import { CookingIllustration } from "../components/Illustrations";
import SuggestionCard from "../components/SuggestionCard";
import CategoryCard from "../components/CategoryCard";

export default function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchSuggestion = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        setSuggestion(data.meals[0]);
      } catch (error) {
        console.error("Failed to fetch suggestion:", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchSuggestion();
    fetchCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query.trim()}`);
    }
  };

  return (
    <div className="space-y-16 animate-fade-in">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
        <div className="md:w-1/2 flex justify-center md:order-2">
          <CookingIllustration className="w-64 h-64 text-teal-500" />
        </div>
        <div className="md:w-1/2 text-center md:text-left md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Temukan Resep Favoritmu
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Bingung mau masak apa hari ini? Cukup ketik bahan atau nama masakan
            dan biarkan kami membantumu!
          </p>
          <form
            onSubmit={handleSearch}
            className="mt-8 w-full max-w-md flex items-center gap-2 bg-white p-2 rounded-full shadow-md mx-auto md:mx-0"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Contoh: Ayam, Soto..."
              className="w-full bg-transparent px-4 py-2 text-slate-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-3 transition-colors"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </section>

      {suggestion && (
        <section>
          <SuggestionCard meal={suggestion} />
        </section>
      )}

      {categories.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6">Jelajahi Kategori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.idCategory} category={cat} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
