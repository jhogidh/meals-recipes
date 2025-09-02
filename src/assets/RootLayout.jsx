import React, { useState, useEffect } from "react";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";

// -- HELPERS --
function processIngredients(meal) {
  const ingredients = [];
  if (!meal) return ingredients;
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(
        `${ingredient.trim()} - ${measure ? measure.trim() : ""}`
      );
    }
  }
  return ingredients;
}

// -- ICONS (SVG Components) --
const LogoIcon = ({ className = "w-8 h-8" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.88 12.88C19.55 12.23 18.99 11.66 18.28 11.23C17.29 10.66 16.11 10.33 14.88 10.14V6.5C14.88 5.12 13.76 4 12.38 4H11.62C10.24 4 9.12 5.12 9.12 6.5V10.14C7.89 10.33 6.71 10.66 5.72 11.23C5.01 11.66 4.45 12.23 4.12 12.88C3.62 13.83 3.49 15.06 3.79 16.5C4.1 17.94 4.81 19.11 5.81 19.78C6.81 20.45 8.02 20.8 9.3 20.94V21H14.7V20.94C15.98 20.8 17.19 20.45 18.19 19.78C19.19 19.11 19.9 17.94 20.21 16.5C20.51 15.06 20.38 13.83 19.88 12.88Z"
      stroke="#0d9488"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.12 6.5H14.88"
      stroke="#0d9488"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const YoutubeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.25,4,12,4,12,4S5.75,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.75,2,12,2,12s0,4.25,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.75,20,12,20,12,20s6.25,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.25,22,12,22,12S22,7.75,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
  </svg>
);

// -- ILLUSTRATIONS (SVG Components) --
const CookingIllustration = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M152.5 152.5H47.5C41.9772 152.5 37.5 148.023 37.5 142.5V82.5C37.5 76.9772 41.9772 72.5 47.5 72.5H152.5C158.023 72.5 162.5 76.9772 162.5 82.5V142.5C162.5 148.023 158.023 152.5 152.5 152.5Z"
      fill="#E0F2F1"
    />
    <path
      d="M125 72.5L112.5 47.5"
      stroke="#4DB6AC"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M100 72.5L87.5 47.5"
      stroke="#4DB6AC"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M75 72.5L62.5 47.5"
      stroke="#4DB6AC"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <circle cx="100" cy="112.5" r="25" fill="#FFFFFF" />
    <circle cx="100" cy="112.5" r="12.5" fill="#FFC107" />
    <rect x="37.5" y="142.5" width="125" height="10" rx="5" fill="#009688" />
  </svg>
);

const FoodPlateIllustration = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="plateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f3f4f6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#e5e7eb", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#plateGradient)" />
    <circle
      cx="100"
      cy="100"
      r="70"
      fill="white"
      stroke="#d1d5db"
      strokeWidth="2"
    />
    <path
      d="M80 80 Q90 60 110 80 T140 80"
      stroke="#84cc16"
      strokeWidth="10"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M70 110 C80 130, 110 130, 120 110"
      stroke="#f97316"
      strokeWidth="12"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="135" cy="95" r="10" fill="#ef4444" />
    <circle cx="125" cy="125" r="8" fill="#eab308" />
  </svg>
);

// -- UI COMPONENTS --

function MealCard({ meal, staggerIndex }) {
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

function SuggestionCard({ meal }) {
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

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.strCategory}`}
      className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-center gap-4"
    >
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-16 h-16"
      />
      <div>
        <h3 className="font-bold text-slate-800">{category.strCategory}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">
          {category.strCategoryDescription}
        </p>
      </div>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-8 mt-16 border-t border-slate-200 text-center text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} Masak Apa.{" "}
        <a color="inherit" href="https://www.instagram.com/jo.gidion/">
          @jo.gidion
        </a>{" "}
        All rights reserved.
      </p>
    </footer>
  );
}

// -- LAYOUT COMPONENT --

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col">
      <header className="bg-white sticky top-0 z-10 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-teal-600"
          >
            <LogoIcon className="w-7 h-7" />
            <span>Masak Apa</span>
          </Link>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 w-full flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// -- PAGE COMPONENTS --

function HomePage() {
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

function SearchResultsPage() {
  const { query } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, [query]);

  return (
    <div className="animate-fade-in">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-teal-600 font-semibold mb-6 hover:underline"
      >
        <ArrowLeftIcon />
        Kembali
      </Link>
      <h2 className="text-3xl font-bold mb-6">Hasil untuk: "{query}"</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <MealCard.Skeleton key={i} />
          ))}
        </div>
      ) : meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal, index) => (
            <MealCard key={meal.idMeal} meal={meal} staggerIndex={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-500 bg-slate-200 py-8 rounded-lg">
          Yah, tidak ada resep yang cocok ditemukan.
        </p>
      )}
    </div>
  );
}

function CategoryPage() {
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

function MealDetailPage() {
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

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search/:query", element: <SearchResultsPage /> },
      { path: "category/:name", element: <CategoryPage /> },
      { path: "meal/:id", element: <MealDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
