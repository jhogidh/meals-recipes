import { createHashRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import MealDetailPage from "./pages/MealDetailPage.jsx";

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

export default router;
