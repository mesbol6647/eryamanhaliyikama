
// import React from "react";
// import {
//   CarFront,
//   PlaneLanding,
//   UserCheck,
//   Users,
//   MapPin,
//   PartyPopper,
//   Ship,
//   Route,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const VipServices = () => {
//   const { t } = useTranslation();

//   const vipServices = [
//     {
//       title: t("vipServices.1"),
//       slug: "hali-yikama",
//       icon: <PlaneLanding size={26} />,
//     },
//     {
//       title: t("vipServices.2"),
//       slug: "koltuk-yikama",
//       icon: <CarFront size={26} />,
//     },
//     {
//       title: t("vipServices.3"),
//       slug: "yatak-yikama",
//       icon: <UserCheck size={26} />,
//     },
//     {
//       title: t("vipServices.4"),
//       slug: "yorgan-yikama",
//       icon: <Users size={26} />,
//     },
//     {
//       title: t("vipServices.5"),
//       slug: "stor-perde-yikama",
//       icon: <MapPin size={26} />,
//     },
//        {
//       title: t("vipServices.8"),
//       slug: "hali-tamir-overlok",
//       icon: <Route size={26} />,
//     },
//   ];

//   return (
//     <section className="bg-black text-white py-16 px-4">
//       <div className="max-w-screen-xl mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold mb-2">{t("vipServices.title")}</h2>
//           <div className="w-24 h-1 bg-yellow-500 mx-auto" />
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {vipServices.map((service, i) => (
//             <Link
//               key={i}
//               to={`/vip/${service.slug}`}
//               className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-2 bg-[#1d2738] hover:bg-[#2c3a4f] border border-gray-700 rounded-xl px-4 py-6 transition duration-200 shadow-sm h-full"
//             >
//               <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-black">
//                 {service.icon}
//               </div>
//               <span className="text-sm md:text-base lg:text-lg font-semibold mt-1 md:mt-0">
//                 {service.title}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VipServices;
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import hali2 from "../assets/vip/hali2.png";
import koltuk from "../assets/vip/koltuk.png";
import yatak from "../assets/vip/yatak.png";
import yorgan from "../assets/vip/yorgan2.png";
import stor from "../assets/vip/stor.png";
import tamir from "../assets/vip/tamir.png";


const VipServices = () => {
  const { t } = useTranslation();

  const vipServices = [
    {
      title: "Halı Yıkama",
      slug: "hali2",
      image: hali2,
    },
    {
      title: "Koltuk Yıkama",
      slug: "koltuk-yikama",
      image: koltuk,
    },
    {
      title: "Yatak Yıkama",
      slug: "yatak-yikama",
      image: yatak,
    },
    {
      title: "Yorgan Yıkama",
      slug: "yorgan-yikama",
      image: yorgan,
    },
    {
      title: "Stor Perde Yıkama",
      slug: "stor-perde-yikama",
      image: stor,
    },
    {
      title: "Halı-Tamir Overlok",
      slug: "hali-tamir-overlok",
      image: tamir,
    },
  ];
  

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t("vipServices.title")}</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vipServices.map((service, i) => (
            <Link
            to={`/vip/${service.slug}`}
            key={i}
            className="relative group overflow-hidden rounded-xl shadow hover:shadow-2xl transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold text-center px-2">
                {service.title}
              </h3>
            </div>
          </Link>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipServices;
