import React from "react";
import { listOffice } from "../../data/listOffice";

export default function Content() {
  return (
    <div className="mx-4 md:mx-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center uppercase my-6">
        Kantor Global
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listOffice.map((item, index) => (
          <div key={index} className="bg-stone-100 p-6 rounded-2xl shadow-sm">
            <img
              src={item.img}
              alt={item.title}
              className="w-full rounded-2xl"
            />
            <h2 className="text-lg font-bold uppercase text-center mt-6 text-red-700">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
