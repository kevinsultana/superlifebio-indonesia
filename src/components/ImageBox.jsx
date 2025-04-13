import React from "react";

export default function ImageBox({ imageSrc, imageAlt }) {
  return (
    <div className="">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
