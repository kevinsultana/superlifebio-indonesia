import React from "react";

export default function Content() {
  const listCountry = [
    { name: "Kenya", link: "/kenya" },
    { name: "South Africa", link: "/south-africa" },
    { name: "Uganda", link: "/uganda" },
  ];

  return (
    <div className="px-8 md:px-12 lg:px-32">
      <h1 className="text-2xl md:text-3xl font-bold text-center py-8 uppercase">
        yayasan <span className="text-red-700">superlife</span>
      </h1>

      {/* Section: Gambar dan Deskripsi */}
      <div className="bg-red-100 rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-justify text-sm md:text-base text-stone-600 leading-relaxed">
              Yayasan SuperLife teguh dalam misinya untuk memerangi kemiskinan
              dan mengentaskan kelaparan di sebagian besar wilayah miskin di
              Afrika. Melalui upaya penuh dedikasi kami, kami telah memberikan
              dukungan kepada anak-anak sekolah dan anak-anak di panti asuhan
              dengan menyediakan barang-barang penting seperti makanan, tas
              sekolah, seragam, dan alat tulis.
              <br />
              <br />
              Komitmen ini merupakan contoh praktik tanggung jawab filantropis
              perusahaan, yang menunjukkan dedikasi kami untuk memberikan dampak
              positif pada kehidupan mereka yang membutuhkan. Dengan terlibat
              dalam inisiatif-inisiatif tersebut, kami menjunjung tinggi
              kewajiban kami untuk berkontribusi terhadap kesejahteraan sosial
              masyarakat dan mengatasi masalah-masalah mendesak seperti
              kelaparan dan kebutuhan pendidikan.
              <br />
              <br />
              Selain itu, kami menunjukkan tanggung jawab ekonomi perusahaan
              dengan secara aktif terlibat dalam inisiatif yang meningkatkan
              lanskap sosio-ekonomi. Melalui SuperLife Foundation, kami
              berkontribusi terhadap pembangunan ekonomi di daerah-daerah
              miskin, mendorong pertumbuhan berkelanjutan dan pemberdayaan
              masyarakat.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/yayasansuperlife.png"
              alt="yayasansuperlife"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section: List Country */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listCountry.map((item, index) => (
          <div
            key={index}
            className="bg-stone-200 p-6 rounded-2xl flex flex-col items-center gap-4 text-center"
          >
            <img
              src="/logosuperlife.png"
              alt="logosuper"
              className="w-24 h-auto object-contain"
            />
            <h2 className="text-lg font-bold uppercase text-red-700">
              {item.name}
            </h2>
            <a href={item.link}>
              <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-white hover:text-red-600 border border-red-600 transition-colors duration-300 text-sm">
                Read More
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
