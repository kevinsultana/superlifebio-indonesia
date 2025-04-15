import React from "react";
import ProductCard from "../../components/ProductCard";

export default function ProdukKami() {
  return (
    <div className="flex flex-col justify-center items-center py-10 pb-14 px-4 sm:px-6 md:px-10 lg:px-20 bg-stone-100">
      <h1 className="text-2xl md:text-3xl font-bold uppercase mb-2 text-center">
        Produk Kami
      </h1>
      <p className="text-stone-400 uppercase font-light mb-6 text-sm md:text-base text-center">
        nutrisi & kesehatan
      </p>

      <div className="grid grid-cols-1 gap-6 w-full max-w-6xl">
        <ProductCard
          imageSrc={"/STC30.png"}
          imageAlt={"STC30"}
          title={"superlife total care 30"}
        />
        <ProductCard
          imageSrc={"/SIC.png"}
          imageAlt={"SIC"}
          title={"superlife immune care"}
        />
      </div>
    </div>
  );
}
