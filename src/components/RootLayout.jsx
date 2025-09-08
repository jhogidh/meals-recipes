import React from "react";
import { Outlet, Link } from "react-router-dom";
import { LogoIcon } from "./Icons.jsx";
import Footer from "../Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout() {
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
      <Analytics />
    </div>
  );
}
