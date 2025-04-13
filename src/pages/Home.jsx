import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import TentangKami from "../sections/TentangKami";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TentangKami />
    </div>
  );
}
