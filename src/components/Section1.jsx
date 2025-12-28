
// // import React from "react";
// // import { Link } from "react-router-dom";

// // const services = [
// //   { title: "Halı Yıkama", image: "/images/hali2.png", link: "/hizmet/hali-yikama" },
// //   { title: "Koltuk Yıkama", image: "/images/koltuk.png", link: "/hizmet/koltuk-yikama" },
// //   { title: "Yatak Yıkama", image: "/images/yatak.png", link: "/hizmet/yatak-yikama" },
// //   { title: "Yorgan Yıkama", image: "/images/yorgan2.png", link: "/hizmet/yorgan-yikama" },
// //   { title: "Stor Perde Yıkama", image: "/images/stor.png", link: "/hizmet/perde-yikama" },
// //   { title: "Halı-Tamir Overlok", image: "/images/tamir.png", link: "/hizmet/hali-tamir-overlok" },
// // ];

// // const sideLinks = [
// //   "Halkalı Halı Yıkama",
// //   "Atakent Halı Yıkama",
// //   "Gültepe Halı Yıkama",
// //   "İstasyon Halı Yıkama",
// //   "Kanarya Halı Yıkama",
// //   "Cennet Halı Yıkama",
// //   "Sefaköy Halı Yıkama",
// //   "Tevfikbey Halı Yıkama",
// //   "İnönü Halı Yıkama",
// //   "Mehmet Akif Halı Yıkama",
// //   "Yarımburgaz Halı Yıkama",
// //   "Söğütlüçeşme Halı Yıkama",
// //   "Kemalpaşa Halı Yıkama",
// //   "Yeşilova Halı Yıkama",
// //   "İkitelli Halı Yıkama",
// //   "Sultan Murat Halı Yıkama",
// //   "EryamanHALI YIKAMA",
// // ];

// // const Section1 = () => {
// //   return (
// //     <section className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
  
// //     {/* Orta Hizmet Kartları */}
// //     <div className="md:col-span-2">
// //       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
// //         {services.map((service, idx) => (
// //           <div key={idx} className="text-center">
// //             <Link
// //               to={service.link}
// //               className="block border border-gray-300 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
// //             >
// //               <img src={service.image} alt={service.title} className="w-full h-[160px] object-cover" />
// //             </Link>
// //             <div className="mt-2 font-semibold text-sm md:text-base text-green-500">
// //               {service.title}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
  
// //       <h2 className="text-lg md:text-2xl font-bold text-green-600 mb-4 text-center md:text-left">EryamanHALI YIKAMA</h2>
// //       <p className="text-gray-700 mb-3 text-sm md:text-base">
// //         EryamanHalı Yıkama olarak, halılarınızı gönül rahatlığıyla bizlere emanet edebilirsiniz. Uygun fiyat politikamız ve üstün teknolojiye sahip ürünlerimiz sayesinde zirvede iş yerimizi korumaya devam ediyoruz.
// //       </p>
// //       <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
// //         <li>EryamanHalı Yıkama, cinsi fark etmeksizin tüm halılarınızı titizlikle temizlemektedir.</li>
// //         <li>Halı yıkama işleminde kullandığımız deterjanlar tamamen 1. sınıf ürünlerdir.</li>
// //         <li>Halılarınız kapınıza kadar hızlıca gelip tekrar teslim edilmektedir.</li>
// //         <li>Halılar en hijyenik şartlarda özel sistemle temizlenerek teslim edilir.</li>
// //         <li>Bizim için her zaman müşteri memnuniyeti ön plandadır.</li>
// //       </ul>
  
// //       <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
// //         <img src="/images/person.png" alt="Person" className="h-28 w-auto" />
// //         <div className="text-center sm:text-left">
// //           <h4 className="font-bold text-[#AD7000] mb-1">Çalışma Saatlerimiz</h4>
// //           <p className="text-sm text-gray-800">
// //             Hafta içi: 08.00 - 20.00<br />
// //             Cmt ve Pzr: 08.00 - 20.00
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //     {/* Sol Menü */}
// //     <aside className="space-y-10 md:space-y-10">
// //       <div className="flex flex-col items-center md:items-start">
// //         <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// //           Sıkça Sorulan<br />Sorular
// //         </h3>
// //         <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// //           {[
// //             "Halımi ne sıklıkla yıkatmam gerekir?",
// //             "Koltuklar Ne Kadar Zamanda Kurur?",
// //             "Halı Tamiri Yapıyor musunuz?",
// //             "Halılar Nasıl Yıkanıyor?",
// //             "Servis Saatleri Nasıl ?",
// //             "Hangi Tür Halıları Yıkıyorsunuz?",
// //             "Hangi Deterjanlar ?",
// //             "Halılar kaç günde teslim ediliyor?",
// //             "Servis Ücreti Ne Kadar ?",
// //           ].map((item, idx) => (
// //             <li key={idx} className="hover:underline cursor-pointer leading-5">
// //               {item}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <div className="flex flex-col items-center md:items-start">
// //         <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// //           Hizmet Bölgelerimiz
// //         </h3>
// //         <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// //           {sideLinks.map((region, idx) => (
// //             <li key={idx} className="leading-5">
// //               <Link to={`/bolge/${region.toLowerCase().replace(/ /g, "-")}`} className="hover:underline">
// //                 {region}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </aside>
// //   </section>
  
// //   );
// // };

// // export default Section1;


// import React from "react";
// import { Link } from "react-router-dom";

// const services = [
//   { title: "Halı Yıkama", image: "/images/hali2.png", link: "/hizmet/hali-yikama" },
//   { title: "Koltuk Yıkama", image: "/images/koltuk.png", link: "/hizmet/koltuk-yikama" },
//   { title: "Yatak Yıkama", image: "/images/yatak.png", link: "/hizmet/yatak-yikama" },
//   { title: "Yorgan Yıkama", image: "/images/yorgan2.png", link: "/hizmet/yorgan-yikama" },
//   { title: "Stor Perde Yıkama", image: "/images/stor.png", link: "/hizmet/perde-yikama" },
//   { title: "Halı-Tamir Overlok", image: "/images/tamir.png", link: "/hizmet/hali-tamir-overlok" },
// ];

// const sideLinks = [
//   "Halkalı Halı Yıkama",
//   "Atakent Halı Yıkama",
//   "Gültepe Halı Yıkama",  
//   "Kanarya Halı Yıkama",
//   "Cennet Halı Yıkama",
//   "Sefaköy Halı Yıkama",
//   "Tevfikbey Halı Yıkama",
//   "İnönü Halı Yıkama",
//   "Mehmet Akif Halı Yıkama",
//   "Yarımburgaz Halı Yıkama",
//   "Söğütlüçeşme Halı Yıkama",
//   "Kemalpaşa Halı Yıkama",
//   "Yeşilova Halı Yıkama",
//   "İkitelli Halı Yıkama",
//   "Sultan Murat Halı Yıkama",
  
// ];

// // Türkçe karakterleri slug'a dönüştüren fonksiyon
// const slugify = (text) =>
//   text
//     .toLowerCase()
//     .replace(/ç/g, "c")
//     .replace(/ğ/g, "g")
//     .replace(/ı/g, "i")
//     .replace(/ö/g, "o")
//     .replace(/ş/g, "s")
//     .replace(/ü/g, "u")
//     .replace(/[^a-z0-9 ]/g, "")
//     .replace(/\s+/g, "-");

// const Section1 = () => {
//   return (
//     <section className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//       {/* Orta Hizmet Kartları */}
//       <div className="md:col-span-2">
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
//           {services.map((service, idx) => (
//             <div key={idx} className="text-center">
//               <Link
//                 to={service.link}
//                 className="block border border-gray-300 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-[160px] object-cover"
//                 />
//               </Link>
//               <div className="mt-2 font-semibold text-sm md:text-base text-green-500">
//                 {service.title}
//               </div>
//             </div>
//           ))}
//         </div>

//         <h2 className="text-lg md:text-2xl font-bold text-green-600 mb-4 text-center md:text-left">
//           EryamanHALI YIKAMA
//         </h2>
//         <p className="text-gray-700 mb-3 text-sm md:text-base">
//           EryamanHalı Yıkama olarak, halılarınızı gönül rahatlığıyla bizlere emanet edebilirsiniz.
//           Uygun fiyat politikamız ve üstün teknolojiye sahip ürünlerimiz sayesinde zirvede iş yerimizi korumaya devam ediyoruz.
//         </p>
//         <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
//           <li>EryamanHalı Yıkama, cinsi fark etmeksizin tüm halılarınızı titizlikle temizlemektedir.</li>
//           <li>Halı yıkama işleminde kullandığımız deterjanlar tamamen 1. sınıf ürünlerdir.</li>
//           <li>Halılarınız kapınıza kadar hızlıca gelip tekrar teslim edilmektedir.</li>
//           <li>Halılar en hijyenik şartlarda özel sistemle temizlenerek teslim edilir.</li>
//           <li>Bizim için her zaman müşteri memnuniyeti ön plandadır.</li>
//         </ul>

//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//           <img src="/images/person.png" alt="Person" className="h-28 w-auto" />
//           <div className="text-center sm:text-left">
//             <h4 className="font-bold text-[#AD7000] mb-1">Çalışma Saatlerimiz</h4>
//             <p className="text-sm text-gray-800">
//               Hafta içi: 08.00 - 20.00<br />
//               Cmt ve Pzr: 08.00 - 20.00
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Sol Menü */}
//       <aside className="space-y-10 md:space-y-10">
//         <div className="flex flex-col items-center md:items-start">
//           <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
//             Sıkça Sorulan<br />Sorular
//           </h3>
//          <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
//   {[
//     "Halımi ne sıklıkla yıkatmam gerekir?",
//     "Koltuklar Ne Kadar Zamanda Kurur?",
//     "Halı Tamiri Yapıyor musunuz?",
//     "Halılar Nasıl Yıkanıyor?",
//     "Servis Saatleri Nasıl ?",
//     "Hangi Tür Halıları Yıkıyorsunuz?",
//     "Hangi Deterjanlar ?",
//     "Halılar kaç günde teslim ediliyor?",
//     "Servis Ücreti Ne Kadar ?",
//   ].map((item, idx) => (
//     <li key={idx} className="leading-5">
//       <Link
//         to="/faq"
//         className="hover:underline block transition duration-200"
//       >
//         {item}
//       </Link>
//     </li>
//   ))}
// </ul>

//         </div>

//         <div className="flex flex-col items-center md:items-start">
//           <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
//             Hizmet Bölgelerimiz
//           </h3>
//           <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
//             {sideLinks.map((region, idx) => (
//               <li key={idx} className="leading-5">
//                 <Link to={`/bolge/${slugify(region)}`} className="hover:underline">
//                   {region}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>
//     </section>
//   );
// };

// export default Section1;
import React from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "Halı Yıkama", image: "/images/hali2.png", link: "/hizmet/hali-yikama" },
  { title: "Koltuk Yıkama", image: "/images/koltuk.png", link: "/hizmet/koltuk-yikama" },
  { title: "Yatak Yıkama", image: "/images/yatak.png", link: "/hizmet/yatak-yikama" },
  { title: "Yorgan Yıkama", image: "/images/yorgan2.png", link: "/hizmet/yorgan-yikama" },
  { title: "Stor Perde Yıkama", image: "/images/stor.png", link: "/hizmet/perde-yikama" },
  { title: "Halı-Tamir Overlok", image: "/images/tamir.png", link: "/hizmet/hali-tamir-overlok" },
];

// ✅ Eryaman odaklı Hizmet Bölgelerimiz
const sideLinks = [
  "Eryaman 1. Etap Halı Yıkama",
  "Eryaman 2. Etap Halı Yıkama",
  "Eryaman 3. Etap Halı Yıkama",
  "Eryaman 4. Etap Halı Yıkama",
  "Eryaman 5. Etap Halı Yıkama",
  "Göksu Halı Yıkama",
  "Güzelkent Halı Yıkama",
  "Şeker Mahallesi Halı Yıkama",
  "Tunahan Mahallesi Halı Yıkama",
  "Altay Mahallesi Halı Yıkama",
  "Yeşiltepe Mahallesi Halı Yıkama",
  "Bağlıca Halı Yıkama",
  "Elvankent Halı Yıkama",
  "Etimesgut Halı Yıkama",
  "Batıkent Halı Yıkama",
];

// ✅ Türkçe karakterleri slug'a dönüştüren fonksiyon (Eryaman 1. Etap için nokta da kalksın)
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\./g, "") // 1. etap -> 1 etap
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");

const Section1 = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Orta Hizmet Kartları */}
      <div className="md:col-span-2">

  {/* ✅ Başlık – mobilde büyük, desktop aynı */}
  <h2 className="text-2xl md:text-2xl font-bold text-blue-600 mb-4 text-center md:text-left">
    ERYAMAN HALI-KOLTUK YIKAMA
  </h2>

  {/* ✅ Açıklama – mobilde büyük + iki yana yaslı */}
  <p className="text-gray-700 mb-4 text-lg md:text-base text-justify md:text-left leading-relaxed">
    Eryaman Halı Yıkama olarak halılarınızı gönül rahatlığıyla bize emanet edebilirsiniz.
    Uygun fiyat, hijyenik yıkama ve randevulu ücretsiz servis anlayışıyla Eryaman’ın tüm etaplarına
    düzenli alım–teslimat sağlıyoruz.
  </p>

  {/* ✅ Liste – mobilde büyük + justify */}
  <ul className="list-disc ml-5 text-gray-700 space-y-3 text-base md:text-base text-justify md:text-left leading-relaxed">
    <li>Eryaman ve çevresinde tüm halı türlerine uygun profesyonel yıkama uygulanır.</li>
    <li>Kullandığımız temizlik ürünleri tekstil yüzeylerine uygun ve güvenli ürünlerdir.</li>
    <li>Halılarınız randevulu şekilde adresinizden alınır, temizlenip paketlenerek teslim edilir.</li>
    <li>Kurutma süreci kontrollü yapılır; koku ve nem riski azaltılır.</li>
    <li>Hedefimiz her zaman yüksek memnuniyet ve düzenli hizmet kalitesidir.</li>
  </ul>

  {/* ✅ Çalışma saatleri */}
  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
    <img src="/images/person.png" alt="Person" className="h-28 w-auto" />

    <div className="text-center sm:text-left">
      <h4 className="font-bold text-[#AD7000] mb-1">Çalışma Saatlerimiz</h4>

      <p className="text-base md:text-sm text-gray-800 leading-relaxed">
        Hafta içi: 08.00 - 20.00
        <br />
        Cumartesi - Pazar: 08.00 - 20.00
      </p>

      {/* ✅ Hizmet kartları */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 mb-8">
        {services.map((service, idx) => (
          <div key={idx} className="text-center">
            <Link
              to={service.link}
              className="block border border-gray-300 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[160px] object-cover"
              />
            </Link>

            <div className="mt-2 font-semibold text-sm md:text-base text-green-600">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

</div>


      {/* Sağ Menü */}
      <aside className="space-y-10 md:space-y-10">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
            Sıkça Sorulan
            <br />
            Sorular
          </h3>

          <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
            {[
              "Halıyı ne sıklıkla yıkatmam gerekir?",
              "Koltuklar ne kadar zamanda kurur?",
              "Halı tamiri yapıyor musunuz?",
              "Halılar nasıl yıkanıyor?",
              "Servis saatleri nasıl?",
              "Hangi tür halıları yıkıyorsunuz?",
              "Hangi deterjanları kullanıyorsunuz?",
              "Halılar kaç günde teslim ediliyor?",
              "Servis ücreti ne kadar?",
            ].map((item, idx) => (
              <li key={idx} className="leading-5">
                <Link to="/faq" className="hover:underline block transition duration-200">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
            Hizmet Bölgelerimiz
          </h3>

          <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
            {sideLinks.map((region, idx) => (
              <li key={idx} className="leading-5">
                <Link to={`/bolge/${slugify(region)}`} className="hover:underline">
                  {region}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default Section1;
