import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/Home/HeroSection";
import TentangKami from "../sections/Home/TentangKami";
import Footer from "../components/Footer";
import ProdukKami from "../sections/Home/ProdukKami";
import KenapaKami from "../sections/Home/KenapaKami";
import Testimonial from "../sections/Home/Testimonial";
import Penghargaan from "../sections/Home/Penghargaan";
import HubungiKami from "../sections/Home/HubungiKami";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TentangKami />
      <ProdukKami />
      <KenapaKami />
      <Testimonial />
      <Penghargaan />
      <HubungiKami />
      <Footer />
    </div>
  );
}
