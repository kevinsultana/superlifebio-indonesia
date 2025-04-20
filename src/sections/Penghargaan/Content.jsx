import React from "react";
import { listPenghargaan } from "../../data/listPenghargaan";

export default function Content() {
  return (
    <div className="px-4 md:px-12 lg:px-32 my-6">
      <h1 className="uppercase text-2xl md:text-3xl font-bold text-center mb-6">
        penghargaan internasional
      </h1>
      {listPenghargaan.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl mb-6 p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow"
        >
          {/* Gambar */}
          <div className="md:w-1/3 w-full flex justify-center mb-4 md:mb-0">
            <img
              src={item.img}
              alt={item.title}
              className="h-60 md:h-72 object-contain"
            />
          </div>

          {/* Teks */}
          <div className="md:w-2/3 w-full flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <p className="font-bold text-xs md:text-sm text-red-500">
              {item.year}
            </p>
            <h2 className="text-lg md:text-xl font-bold text-red-700">
              {item.title}
            </h2>
            <p className="text-xs md:text-sm text-justify text-gray-700 w-full mt-2">
              {item.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
