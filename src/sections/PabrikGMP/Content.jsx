import React from "react";
import { listPabrikGMP, listPhotoPabrikGMP } from "../../data/listPabrikGMP";

export default function Content() {
  return (
    <div className="mx-8 pb-8">
      <h1 className="text-2xl font-bold text-center py-8 uppercase">
        Pabrik Gmp
      </h1>
      <div className="bg-red-100 p-6 rounded-2xl">
        <img
          src="/pabrikgmp.png"
          alt="pabrik-gmp"
          className="rounded-2xl mb-6"
        />
        {listPabrikGMP.map((item, index) => (
          <div key={index} className="mb-4">
            <p className="text-justify text-sm text-stone-600">{item}</p>
          </div>
        ))}
      </div>
      <div className="bg-red-100 p-6 rounded-2xl mt-6">
        {listPhotoPabrikGMP.map((item, index) => (
          <div key={index}>
            <img src={item} alt={item + index} className="rounded-2xl mb-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
