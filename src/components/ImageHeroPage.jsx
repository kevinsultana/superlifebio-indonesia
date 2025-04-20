import React from "react";

export default function ImageHeroPage() {
  return (
    <div className="relative pt-16 lg:pt-24 flex justify-center">
      <div className="bg-red-600 absolute top-24 w-full lg:h-100 left-0 z-0" />
      <img
        src="/globaloffice.png"
        alt="global office"
        className="rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl z-10"
      />
    </div>
  );
}
