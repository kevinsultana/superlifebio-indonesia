import React from "react";
import ImageBox from "../components/ImageBox";
import BtnAction from "../components/BtnAction";

export default function TentangKami() {
  return (
    <div className="pb-10 md:flex md:pt-8 lg:mx-32 ">
      <div className="p-10 md:w-full lg:w-1/2 lg:p-0 ">
        <ImageBox imageSrc="/tentangkami.png" imageAlt="tentang kami" />
      </div>
      <div className="md:w-full lg:ml-8 justify-center flex flex-col">
        <h1 className="text-2xl font-bold uppercase text-red-600 text-center md:text-left mb-8 md:text-black md:mb-4">
          Tentang Kami
        </h1>
        <p className="text-justify md:text-left mx-8 md:mx-0 md:mr-8 text-stone-700">
          SuperLife World Sdn Bhd, yang dikenal dengan tagline populernya “In
          SuperLife, Life is Super!”, adalah perusahaan penjualan langsung yang
          resmi didirikan pada tahun 2017 di Malaysia. Sejak awal berdirinya,
          SuperLife dengan cepat bertransformasi menjadi perusahaan
          multinasional dengan jangkauan signifikan di lebih dari 40 negara di 4
          benua. SuperLife adalah anggota Asosiasi Penjualan Langsung Malaysia
          (DSAM).
        </p>
        <div className="flex justify-center md:justify-start mt-6">
          <BtnAction textAction="Selengkapnya" />
        </div>
      </div>
    </div>
  );
}
