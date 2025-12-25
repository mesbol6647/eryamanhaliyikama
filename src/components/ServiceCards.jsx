




import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Halı Yıkama",
    image: "/images/hali2.png",
    link: "/hizmet/hali-yikama",
  },
  {
    title: "Koltuk Yıkama",
    image: "/images/koltuk.png",
    link: "/hizmet/koltuk-yikama",
  },
  {
    title: "Yatak Yıkama",
    image: "/images/yatak.png",
    link: "/hizmet/yatak-yikama",
  },
];

const ServiceCards = () => {
  return (
    <div>
      <h4 className="text-2xl text-center font-bold mb-4 text-green-700">Hizmetlerimiz</h4>
      <div className="space-y-4">
        {services.map((s, i) => (
          <Link
            key={i}
            to={s.link}
            className="block rounded-xl shadow-md hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 overflow-hidden group"
          >
            <div className="relative h-32">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <span className="text-white text-base font-semibold tracking-wide group-hover:underline">
                  {s.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
