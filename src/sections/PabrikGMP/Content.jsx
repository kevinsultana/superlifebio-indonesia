import React from "react";
import { listPabrikGMP, listPhotoPabrikGMP } from "../../data/listPabrikGMP";

export default function Content() {
  return (
    <div className="mx-4 md:mx-8 pb-8">
      <h1 className="text-2xl font-bold text-center py-8 uppercase">
        Pabrik GMP
      </h1>

      {/* Deskripsi dan gambar utama */}
      <div className="bg-red-100 p-6 rounded-2xl">
        <img
          src="/pabrikgmp.png"
          alt="pabrik-gmp"
          className="rounded-2xl mb-6 w-full"
        />
        {listPabrikGMP.map((item, index) => (
          <div key={index} className="mb-4">
            <p className="text-justify text-sm text-stone-600">{item}</p>
          </div>
        ))}
      </div>

      {/* Grid foto-foto pabrik */}
      <div className="bg-red-100 p-6 rounded-2xl mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {listPhotoPabrikGMP.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`pabrik-${index}`}
              className="rounded-2xl w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
