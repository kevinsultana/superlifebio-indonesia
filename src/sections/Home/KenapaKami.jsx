import React from "react";
import { listKenapaKami } from "../../data/listKenapaKami";
import BtnAction from "../../components/BtnAction";

export default function KenapaKami() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl uppercase font-bold text-center mb-6 md:mb-8">
        mengapa <span className="text-red-600">superlife ?</span>
      </h1>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-6 mb-8">
        {listKenapaKami.map((item, index) => (
          <div
            key={index}
            className="bg-stone-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-red-600 text-lg uppercase font-bold">
              {item.text}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4">
        <BtnAction textAction={"Selengkapnya"} />
      </div>
    </div>
  );
}
