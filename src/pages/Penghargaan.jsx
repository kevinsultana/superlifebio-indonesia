import React from "react";
import Header from "../components/Header";
import ImageHeroPage from "../components/ImageHeroPage";
import CTAWhastapp from "../components/CTAWhastapp";
import Footer from "../components/Footer";
import Content from "../sections/Penghargaan/Content";

export default function Penghargaan() {
  return (
    <div className="bg-stone-100">
      <Header />
      <ImageHeroPage />
      <Content />
      <CTAWhastapp />
      <Footer />
    </div>
  );
}
