import React from "react";
import Header from "../../components/Header";
import CTAWhastapp from "../../components/CTAWhastapp";
import Footer from "../../components/Footer";
import ImageHeroPage from "../../components/ImageHeroPage";
import KenapaKami from "../../sections/MengapaSuperlife/KenapaKami";

export default function MengapaSuperlife() {
  return (
    <div>
      <Header />
      <ImageHeroPage />
      <KenapaKami />
      <CTAWhastapp />
      <Footer />
    </div>
  );
}
