import React from "react";
import BtnAction from "../components/BtnAction";

export default function HeroSection() {
  return (
    <div className="pt-16 pb-6 bg-stone-100 md:bg-transparent md:pb-0 lg:pb-40 lg:pt-20 ">
      <div>
        <img
          src="/whatsappicon.png"
          alt="Whatsapp"
          className="fixed bottom-2 right-2 w-12 md:w-16 md:bottom-4 md:right-4"
        />
      </div>

      {/* mobile image */}
      <div className="md:hidden lg:hidden">
        <img src="/panel1_mobile.png" alt="hero" className="w-full h-80" />
      </div>

      {/* desktop tablet image */}
      <div className="hidden md:block">
        <div className="absolute right-0 z-[-1]">
          <img
            src="/panel1.png"
            alt="hero"
            className="w-xl lg:h-screen/2 lg:w-4xl"
          />
        </div>
      </div>

      {/* mobile content */}
      <div className="md:hidden lg:hidden ">
        <h1 className="text-md font-medium text-center py-4 uppercase">
          Selamat datang di superlife
        </h1>
        <h2 className="text-3xl font-medium text-center mx-12 pb-4 uppercase text-red-600">
          penjualan langsung berupa <br />
          produk kesehatan dan <br /> kecantikan premium
        </h2>
        <div className="flex justify-center">
          <BtnAction textAction="Selanjutnya" />
        </div>
      </div>

      {/* tablet and desktop Content */}
      <div className="hidden md:block bg-white/20 h-96 lg:bg-white/0 lg:h-auto">
        <h1 className="text-xl lg:text-2xl font-bold lg:font-medium text-left py-4 pl-16 lg:pl-32 uppercase pt-26 lg:pt-48 ">
          Selamat datang di superlife
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-left pb-4 pl-16 lg:pl-32 uppercase text-red-600">
          penjualan langsung <br /> berupa produk kesehatan <br /> dan
          kecantikan premium
        </h2>
        <div className="pl-16 pt-4 lg:pt-6 lg:pl-32 ">
          <BtnAction textAction="Selanjutnya" />
        </div>
      </div>
    </div>
  );
}
