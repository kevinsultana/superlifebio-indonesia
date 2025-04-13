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
    <div className="flex flex-col justify-center items-center py-8 bg-black">
      {/* logo */}
      <div className="w-1/4">
        <img src="footLogosuperlife.png" alt="footer logo" />
      </div>

      {/* links */}
      <div className="text-white text-center">
        <h1>Links</h1>
        <ul>
          {listTautan.map((item, index) => (
            <li key={index}>
              <a href={item.linkMenu}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* contact */}
      <div className="text-white text-center ">
        <h1>Contact</h1>
        <ul className="mx-8 max-w-72">
          <li className="flex gap-8 ">
            <FaMapMarkerAlt className="fill-red-600 w-21 h-7" />
            <p className="text-left">
              Gedung Pusat Perfilman Usmar Ismail Jl. H. R. Rasuna Said No.22
              Kavling C, RT.2/RW.5, Karet Kuningan, Kecamatan Setiabudi, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940
            </p>
          </li>
          <li className="flex gap-8 ">
            <FaPhoneAlt className="fill-red-600 w-auto h-auto" />
            <p className="text-left">0812-3456-7890</p>
          </li>
          <li className="flex gap-8 ">
            <IoMail className="fill-red-600 w-auto h-auto" />
            <p className="text-left">test.email@email.com</p>
          </li>
        </ul>
      </div>

      {/* follow us */}
      <div className="text-white text-center">
        <h1>Follow Us</h1>
        <div className="flex gap-8">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </div>
        <h1>© 2023 SuperLife World Sdn Bhd</h1>
      </div>
    </div>
  );
}
