import React from "react";
import { Outlet, NavLink } from "react-router-dom";

// Komponen ini adalah "kerangka" dari setiap halaman.
// Berisi header navigasi dan <Outlet> untuk merender halaman anak.
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-amber-50/50 font-sans">
      <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-10 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-amber-600">
            Meal<span className="text-gray-800">Mingle</span>
          </NavLink>
          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Discover
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Search
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-10">
        <Outlet />
      </main>
      <footer className="text-center py-6 mt-10 border-t border-gray-200">
        <p className="text-gray-500">Happy Cooking with MealMingle!</p>
      </footer>
    </div>
  );
}
