import React from "react";
import { listTautan } from "../data/listTautan";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start md:w-1/4">
          <img
            src="/footLogosuperlife.png"
            alt="footer logo"
            className="w-24 md:w-32"
          />
        </div>

        {/* Tautan */}
        <div className="text-center md:text-left md:w-1/4">
          <h2 className="font-semibold uppercase mb-3 text-lg">Tautan</h2>
          <ul className="space-y-1">
            {listTautan.map((item, index) => (
              <li key={index}>
                <a
                  href={item.linkMenu}
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="font-semibold uppercase mb-3 text-lg">Kontak</h2>
          <div className="flex flex-col items-center">
            <ul className="space-y-4 text-sm w-2/3 md:w-auto text-left">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-600" />
                <p>
                  Gedung Pusat Perfilman Usmar Ismail
                  <br />
                  Jl. H. R. Rasuna Said No.22 Kavling C, Karet Kuningan, Jakarta
                  Selatan
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-600" />
                <p>0812-3456-7890</p>
              </li>
              <li className="flex items-center gap-3">
                <IoMail className="text-red-600" />
                <p>test.email@email.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Sosial Media */}
        <div className="text-center md:text-left md:w-1/6">
          <h2 className="font-semibold uppercase mb-3 text-lg">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="hover:text-red-500" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-red-500" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        2025 © SuperLife Bio Indonesia. All Rights Reserved.
      </div>
    </footer>
  );
}
