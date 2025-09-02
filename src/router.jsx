import { createHashRouter } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import RandomMeal from "./pages/RandomMeal.jsx";
import SearchMeal from "./pages/SearchMeal.jsx";
import MealById from "./pages/MealById.jsx";

// File ini mendefinisikan semua URL dan komponen halaman yang sesuai.
const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout utama yang selalu tampil
    children: [
      {
        index: true, // Halaman default (path: "/")
        element: <RandomMeal />,
      },
      {
        path: "search", // path: "/search"
        element: <SearchMeal />,
      },
      {
        path: "meal/:mealId", // path: "/meal/12345"
        element: <MealById />,
      },
    ],
  },
]);

export default router;
