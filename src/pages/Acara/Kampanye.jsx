import React from "react";
import Header from "../../components/Header";
import ImageHeroPage from "../../components/ImageHeroPage";
import CTAWhastapp from "../../components/CTAWhastapp";
import Footer from "../../components/Footer";
import Content from "../../sections/Kampanye/Content";

export default function Kampanye() {
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
