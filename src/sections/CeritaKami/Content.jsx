import React from "react";
import { listContentCeritaKami } from "../../data/listContentCeritaKami";

export default function Content() {
  // Bagi data ke 2 kolom manual
  const leftColumn = listContentCeritaKami.slice(0, 4);
  const rightColumn = listContentCeritaKami.slice(4);

  return (
    <div className="pb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center py-8 uppercase">
        Cerita Kami
      </h1>
      <div className="text-justify mx-8 md:mx-16 lg:mx-36">
        {/* Mobile & tablet tetap 1 kolom, desktop 2 kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Kolom kiri */}
          <div className="flex flex-col gap-6">
            {leftColumn.map((item, index) => (
              <div key={index}>
                <h2 className="text-red-600 font-bold text-xl mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-base">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Kolom kanan */}
          <div className="flex flex-col gap-6">
            {rightColumn.map((item, index) => (
              <div key={index + 4}>
                <h2 className="text-red-600 font-bold text-xl mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
