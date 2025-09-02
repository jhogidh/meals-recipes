import React from "react";

export const CookingIllustration = ({ className }) => (
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

export const FoodPlateIllustration = ({ className }) => (
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
