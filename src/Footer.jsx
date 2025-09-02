import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-8 mt-16 border-t border-slate-200 text-center text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} Masak Apa. Dibuat dengan penuh rasa.
      </p>
    </footer>
  );
}
