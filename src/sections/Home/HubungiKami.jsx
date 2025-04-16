import React, { useEffect, useState } from "react";

export default function HubungiKami() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captchaAnswer: "",
  });

  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [error, setError] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 99) + 1;
    const b = Math.floor(Math.random() * 99) + 1;
    setCaptcha({ a, b });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      form.name === "" &&
      form.email === "" &&
      form.phone === "" &&
      form.message === ""
    ) {
      setError("Mohon isi semua form");
      return;
    }

    const expectedAnswer = captcha.a + captcha.b;
    if (parseInt(form.captchaAnswer) !== expectedAnswer) {
      setError("Jawaban captcha salah.");
      return generateCaptcha(), setForm({ ...form, captchaAnswer: "" });
    }

    const message = `
    *Tanya Superlife*\n
    Nama: ${form.name}
    Email: ${form.email}
    No HP: ${form.phone}
    Pesan: ${form.message}
    `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "628129924049";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(waLink, "_blank");
  };

  return (
    <div className="bg-red-100 p-6 pb-10 md:pb-12 lg:pb-20">
      <h1 className="text-2xl font-bold text-center text-red-600 uppercase py-4 pb-8">
        Hubungi Kami
      </h1>

      {/* wrapper dua kolom */}
      <div className="flex flex-col md:flex-row gap-6 lg:mx-30 lg:gap-8">
        {/* Kiri: Info Kontak */}
        <div className="bg-white p-4 flex flex-col gap-4 rounded-2xl w-full md:w-1/2">
          <p className="text-sm">
            Apabila ada pertanyaan atau membutuhkan informasi, silahkan hubungi
            kami
          </p>
          <h2 className="text-red-600 font-semibold text-xl uppercase py-2">
            superlife bio indonesia
          </h2>
          <p className="text-md">
            Gedung Pusat Perfilman Usmar Ismail <br />
            Jl. H. R. Rasuna Said No.22 Kavling C, <br />
            Karet Kuningan, Jakarta Selatan
          </p>
          <a
            href="mailto:dian.travel99@gmail.com"
            className="text-blue-500 hover:underline"
          >
            dian.travel99@gmail.com
          </a>
          <p className="text-md">
            Kami adalah anggota Asosiasi Penjualan Langsung Malaysia. <br />
            Nomor Keanggotaan : ........
          </p>
        </div>

        {/* Kanan: Form */}
        <div className="bg-red-700 text-white p-6 rounded-2xl w-full md:w-1/2">
          <h1 className="text-xl font-bold text-center mb-4">
            TANYA SUPERLIFE
          </h1>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 mb-3 p-2 rounded-full text-black placeholder-gray-500 bg-white"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Alamat Email"
            className="w-full mb-3 px-4 p-2 rounded-full text-black placeholder-gray-500 bg-white"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Nomor Handphone"
            className="w-full mb-3 px-4 p-2 rounded-full text-black placeholder-gray-500 bg-white"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="w-full mb-3 px-4 p-2 rounded-xl text-black placeholder-gray-500 resize-none bg-white"
          />

          <div className="flex items-center gap-2 mb-3 justify-end">
            <span className="text-white">{`${captcha.a} + ${captcha.b} =`}</span>
            <input
              name="captchaAnswer"
              value={form.captchaAnswer}
              onChange={handleChange}
              inputMode="numeric"
              className="w-12 p-1 px-2 rounded-full text-black text-center bg-white"
            />
            <button
              onClick={handleSubmit}
              className="bg-white text-red-700 font-semibold px-4 py-1 rounded-full hover:bg-gray-200"
            >
              Kirim
            </button>
          </div>

          {error && (
            <p className="text-sm text-yellow-200 justify-center flex">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
