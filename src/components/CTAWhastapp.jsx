import React from "react";

export default function CTAWhastapp() {
  return (
    <button onClick={() => window.open("https://wa.me/628129924049")}>
      <img
        src="/whatsappicon.png"
        alt="Whatsapp"
        className="fixed bottom-2 right-2 w-12 md:w-16 md:bottom-4 md:right-4"
      />
    </button>
  );
}
