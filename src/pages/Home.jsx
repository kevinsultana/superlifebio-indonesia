import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/Home/HeroSection";
import TentangKami from "../sections/Home/TentangKami";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TentangKami />
    </div>
  );
}
