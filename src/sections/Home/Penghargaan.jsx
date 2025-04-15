import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { listPenghargaan } from "../../data/listPenghargaan.js";
import BtnAction from "../../components/BtnAction.jsx";

export default function Penghargaan() {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-red-600 font-bold uppercase text-2xl mb-6 text-center">
          Penghargaan
        </h1>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {listPenghargaan.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center px-2 text-center h-auto">
                <img
                  src={item.img}
                  alt={`Penghargaan ${index + 1}`}
                  className="w-full max-h-52 object-contain mb-4 rounded shadow-md"
                />
                <p className="text-sm text-gray-700">{item.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dot pagination custom di bawah swiper */}
        <div className="custom-pagination flex justify-center mt-4 space-x-2" />

        <div className="flex justify-center pt-6">
          <BtnAction textAction={"Selengkapnya"} />
        </div>
      </div>
    </div>
  );
}
