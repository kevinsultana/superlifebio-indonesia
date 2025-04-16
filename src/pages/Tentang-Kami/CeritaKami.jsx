import React from "react";
import Header from "../../components/Header";
import CTAWhastapp from "../../components/CTAWhastapp";
import Footer from "../../components/Footer";
import ImageHeroPage from "../../components/ImageHeroPage";
import Content from "../../sections/CeritaKami/Content";

export default function CeritaKami() {
  return (
    <div>
      <Header />
      <ImageHeroPage />
      <Content />
      <CTAWhastapp />
      <Footer />
    </div>
  );
}
