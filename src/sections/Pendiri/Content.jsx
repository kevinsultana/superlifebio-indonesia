import React from "react";
import { listFounder } from "../../data/listFounder";

export default function Content() {
  return (
    <div className="px-4 md:px-12 lg:px-32">
      <h1 className="text-2xl md:text-3xl font-bold text-center py-8 uppercase">
        Pendiri
      </h1>
      <div className="flex flex-col gap-8">
        {listFounder.map((item, index) => (
          <div
            key={index}
            className="bg-red-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            <img
              src={item.img}
              alt="founder"
              className="rounded-2xl w-full md:w-1/3 h-auto object-cover"
            />
            <div className="flex-1 text-left">
              <h1 className="mb-4 uppercase font-bold text-2xl">{item.name}</h1>
              <h2 className="text-xl font-semibold uppercase text-red-700 mb-4">
                {item.position}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{item.profile1}</p>
              <p className="text-sm text-gray-600">{item.profile2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
