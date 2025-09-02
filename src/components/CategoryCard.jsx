import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
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
