import React from "react";

export default function Content() {
  return (
    <div className="px-4 md:px-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center py-8 uppercase">
        Leadership Summit
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-stone-100 p-6 rounded-2xl">
          <img
            src="/leadership-summit.png"
            alt="summit"
            className="w-full rounded-2xl"
          />
          <h1 className="text-lg font-bold uppercase text-center my-6 text-red-700">
            superlife international leadership summit trip 2024: a celebration
            of diversity and unity
          </h1>
          <a
            href=""
            className="mt-4 flex w-1/2 justify-center mx-auto bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:bg-white hover:text-red-600 hover:border hover:border-red-600"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
