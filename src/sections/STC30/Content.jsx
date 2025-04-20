import React from "react";

export default function Content() {
  return (
    <div className="my-6 px-4 md:px-12 lg:px-36">
      <h1 className="text-2xl md:text-3xl font-bold text-center uppercase">
        Superlife total care 30
      </h1>
      <div className="flex justify-center items-center w-full md:w-5/6 mx-auto">
        <img
          src="/STC30-desc.png"
          alt="stc30desc"
          className="my-6 rounded-2xl h-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}
