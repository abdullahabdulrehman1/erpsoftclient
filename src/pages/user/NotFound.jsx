import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        className="w-40 h-40 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h1 className="text-6xl font-bold mt-4">404</h1>
      <h3 className="text-3xl mt-2">Not Found</h3>
      <Link
        to="/"
        className="mt-4 text-lg text-blue-500 hover:underline transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
