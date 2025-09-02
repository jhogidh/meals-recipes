import React from "react";

export const LogoIcon = ({ className = "w-8 h-8" }) => (
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

export const SearchIcon = ({ className = "w-6 h-6" }) => (
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

export const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
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

export const YoutubeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.25,4,12,4,12,4S5.75,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.75,2,12,2,12s0,4.25,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.75,20,12,20,12,20s6.25,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.25,22,12,22,12S22,7.75,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
  </svg>
);
