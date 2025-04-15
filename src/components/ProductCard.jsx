import React from "react";

export default function ProductCard({ imageSrc, imageAlt, title }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 bg-red-100 p-6 rounded-2xl shadow-md mx-auto w-full max-w-4xl">
      <div className="flex justify-center items-center mb-4 md:mb-0 md:h-48 md:w-48">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-2xl object-cover w-full h-auto max-w-[200px]"
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h1 className="uppercase text-red-600 font-bold my-4 md:my-0 md:mb-6 lg:mb-8 text-xl md:text-2xl lg:text-4xl">
          {title}
        </h1>
        <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-white hover:text-red-600 border border-red-600 transition-colors duration-300 text-sm md:text-base">
          Detail Produk
        </button>
      </div>
    </div>
  );
}
