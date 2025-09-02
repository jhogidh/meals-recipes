import React from "react";

export default function Footer() {
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
