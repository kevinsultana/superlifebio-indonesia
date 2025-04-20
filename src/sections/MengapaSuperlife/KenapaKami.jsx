import React from "react";
import { listKenapaKami } from "../../data/listKenapaKami";
import BtnAction from "../../components/BtnAction";

export default function KenapaKami() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center py-8 uppercase">
        mengapa <span className="text-red-600">superlife ?</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {listKenapaKami.map((item, index) => (
          <div
            key={index}
            className="bg-stone-100 p-6 rounded-2xl flex flex-col items-center text-center h-full"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-red-600 text-lg uppercase font-bold mb-4">
              {item.text}
            </h1>
            <p className="text-justify text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
