import React from "react";

export default function Content() {
  const listCampaign = [
    {
      img: "/kampanye/Seoul.jpeg",
      title: "superlife asia summit 2024",
      link: "",
    },
    {
      img: "/kampanye/cape-town.jpeg",
      title: "superlife africa summit 2024",
      link: "",
    },
  ];

  return (
    <div className="px-4 md:px-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center py-8 uppercase">
        Kampanye
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listCampaign.map((item, index) => (
          <div key={index} className="bg-stone-100 p-6 rounded-2xl shadow-sm">
            <img
              src={item.img}
              alt={item.title}
              className="w-full rounded-2xl"
            />
            <h2 className="text-lg font-bold uppercase text-center my-6">
              {item.title}
            </h2>
            <a
              href={item.link}
              className="mt-4 flex w-1/2 justify-center mx-auto bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:bg-white hover:text-red-600 hover:border hover:border-red-600"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
