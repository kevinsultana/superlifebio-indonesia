import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAWhastapp from "../../components/CTAWhastapp";
import Content from "../../sections/PabrikGMP/Content";
import ImageHeroPage from "../../components/ImageHeroPage";

export default function PabrikGMP() {
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
