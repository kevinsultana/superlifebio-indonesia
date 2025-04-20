import React from "react";
import { listCountry } from "../../data/listCountry";

export default function Content() {
  return (
    <div className="mt-8 px-4 md:px-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center py-8 uppercase">
        Ketenaran
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listCountry.map((item, index) => (
          <div className="bg-stone-100 p-4 rounded-2xl" key={index}>
            <img
              src={item.img}
              alt={item.img}
              className="w-full rounded-2xl mb-4 lg:h-48 object-cover"
            />
            <h1 className="text-lg font-bold uppercase text-center">
              {item.name}
            </h1>
            <a
              // href={item.link}
              className="mt-4 flex w-1/2 justify-center mx-auto bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:bg-white hover:text-red-600 hover:border hover:border-red-600"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
