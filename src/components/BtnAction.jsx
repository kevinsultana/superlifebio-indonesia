import React from "react";

export default function BtnAction({ textAction, className = "" }) {
  return (
    <button
      className={`bg-red-600 text-white py-2 px-4 rounded-full border-2 border-red-600 transition-colors duration-300 hover:bg-white hover:text-red-600 hover:border-red-600 ${className}`}
    >
      {textAction}
    </button>
  );
}
