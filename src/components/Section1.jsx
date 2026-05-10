
// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // const services = [
// // // //   { title: "Halı Yıkama", image: "/images/hali2.png", link: "/hizmet/hali-yikama" },
// // // //   { title: "Koltuk Yıkama", image: "/images/koltuk.png", link: "/hizmet/koltuk-yikama" },
// // // //   { title: "Yatak Yıkama", image: "/images/yatak.png", link: "/hizmet/yatak-yikama" },
// // // //   { title: "Yorgan Yıkama", image: "/images/yorgan2.png", link: "/hizmet/yorgan-yikama" },
// // // //   { title: "Stor Perde Yıkama", image: "/images/stor.png", link: "/hizmet/perde-yikama" },
// // // //   { title: "Halı-Tamir Overlok", image: "/images/tamir.png", link: "/hizmet/hali-tamir-overlok" },
// // // // ];

// // // // const sideLinks = [
// // // //   "Halkalı Halı Yıkama",
// // // //   "Atakent Halı Yıkama",
// // // //   "Gültepe Halı Yıkama",
// // // //   "İstasyon Halı Yıkama",
// // // //   "Kanarya Halı Yıkama",
// // // //   "Cennet Halı Yıkama",
// // // //   "Sefaköy Halı Yıkama",
// // // //   "Tevfikbey Halı Yıkama",
// // // //   "İnönü Halı Yıkama",
// // // //   "Mehmet Akif Halı Yıkama",
// // // //   "Yarımburgaz Halı Yıkama",
// // // //   "Söğütlüçeşme Halı Yıkama",
// // // //   "Kemalpaşa Halı Yıkama",
// // // //   "Yeşilova Halı Yıkama",
// // // //   "İkitelli Halı Yıkama",
// // // //   "Sultan Murat Halı Yıkama",
// // // //   "EryamanHALI YIKAMA",
// // // // ];

// // // // const Section1 = () => {
// // // //   return (
// // // //     <section className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
  
// // // //     {/* Orta Hizmet Kartları */}
// // // //     <div className="md:col-span-2">
// // // //       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
// // // //         {services.map((service, idx) => (
// // // //           <div key={idx} className="text-center">
// // // //             <Link
// // // //               to={service.link}
// // // //               className="block border border-gray-300 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
// // // //             >
// // // //               <img src={service.image} alt={service.title} className="w-full h-[160px] object-cover" />
// // // //             </Link>
// // // //             <div className="mt-2 font-semibold text-sm md:text-base text-green-500">
// // // //               {service.title}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
  
// // // //       <h2 className="text-lg md:text-2xl font-bold text-green-600 mb-4 text-center md:text-left">EryamanHALI YIKAMA</h2>
// // // //       <p className="text-gray-700 mb-3 text-sm md:text-base">
// // // //         EryamanHalı Yıkama olarak, halılarınızı gönül rahatlığıyla bizlere emanet edebilirsiniz. Uygun fiyat politikamız ve üstün teknolojiye sahip ürünlerimiz sayesinde zirvede iş yerimizi korumaya devam ediyoruz.
// // // //       </p>
// // // //       <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
// // // //         <li>EryamanHalı Yıkama, cinsi fark etmeksizin tüm halılarınızı titizlikle temizlemektedir.</li>
// // // //         <li>Halı yıkama işleminde kullandığımız deterjanlar tamamen 1. sınıf ürünlerdir.</li>
// // // //         <li>Halılarınız kapınıza kadar hızlıca gelip tekrar teslim edilmektedir.</li>
// // // //         <li>Halılar en hijyenik şartlarda özel sistemle temizlenerek teslim edilir.</li>
// // // //         <li>Bizim için her zaman müşteri memnuniyeti ön plandadır.</li>
// // // //       </ul>
  
// // // //       <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
// // // //         <img src="/images/person.png" alt="Person" className="h-28 w-auto" />
// // // //         <div className="text-center sm:text-left">
// // // //           <h4 className="font-bold text-[#AD7000] mb-1">Çalışma Saatlerimiz</h4>
// // // //           <p className="text-sm text-gray-800">
// // // //             Hafta içi: 08.00 - 20.00<br />
// // // //             Cmt ve Pzr: 08.00 - 20.00
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //     {/* Sol Menü */}
// // // //     <aside className="space-y-10 md:space-y-10">
// // // //       <div className="flex flex-col items-center md:items-start">
// // // //         <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// // // //           Sıkça Sorulan<br />Sorular
// // // //         </h3>
// // // //         <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// // // //           {[
// // // //             "Halımi ne sıklıkla yıkatmam gerekir?",
// // // //             "Koltuklar Ne Kadar Zamanda Kurur?",
// // // //             "Halı Tamiri Yapıyor musunuz?",
// // // //             "Halılar Nasıl Yıkanıyor?",
// // // //             "Servis Saatleri Nasıl ?",
// // // //             "Hangi Tür Halıları Yıkıyorsunuz?",
// // // //             "Hangi Deterjanlar ?",
// // // //             "Halılar kaç günde teslim ediliyor?",
// // // //             "Servis Ücreti Ne Kadar ?",
// // // //           ].map((item, idx) => (
// // // //             <li key={idx} className="hover:underline cursor-pointer leading-5">
// // // //               {item}
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //       <div className="flex flex-col items-center md:items-start">
// // // //         <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// // // //           Hizmet Bölgelerimiz
// // // //         </h3>
// // // //         <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// // // //           {sideLinks.map((region, idx) => (
// // // //             <li key={idx} className="leading-5">
// // // //               <Link to={`/bolge/${region.toLowerCase().replace(/ /g, "-")}`} className="hover:underline">
// // // //                 {region}
// // // //               </Link>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //     </aside>
// // // //   </section>
  
// // // //   );
// // // // };

// // // // export default Section1;


// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // const services = [
// // //   { title: "Halı Yıkama", image: "/images/hali2.png", link: "/hizmet/hali-yikama" },
// // //   { title: "Koltuk Yıkama", image: "/images/koltuk.png", link: "/hizmet/koltuk-yikama" },
// // //   { title: "Yatak Yıkama", image: "/images/yatak.png", link: "/hizmet/yatak-yikama" },
// // //   { title: "Yorgan Yıkama", image: "/images/yorgan2.png", link: "/hizmet/yorgan-yikama" },
// // //   { title: "Stor Perde Yıkama", image: "/images/stor.png", link: "/hizmet/perde-yikama" },
// // //   { title: "Halı-Tamir Overlok", image: "/images/tamir.png", link: "/hizmet/hali-tamir-overlok" },
// // // ];

// // // const sideLinks = [
// // //   "Halkalı Halı Yıkama",
// // //   "Atakent Halı Yıkama",
// // //   "Gültepe Halı Yıkama",  
// // //   "Kanarya Halı Yıkama",
// // //   "Cennet Halı Yıkama",
// // //   "Sefaköy Halı Yıkama",
// // //   "Tevfikbey Halı Yıkama",
// // //   "İnönü Halı Yıkama",
// // //   "Mehmet Akif Halı Yıkama",
// // //   "Yarımburgaz Halı Yıkama",
// // //   "Söğütlüçeşme Halı Yıkama",
// // //   "Kemalpaşa Halı Yıkama",
// // //   "Yeşilova Halı Yıkama",
// // //   "İkitelli Halı Yıkama",
// // //   "Sultan Murat Halı Yıkama",
  
// // // ];

// // // // Türkçe karakterleri slug'a dönüştüren fonksiyon
// // // const slugify = (text) =>
// // //   text
// // //     .toLowerCase()
// // //     .replace(/ç/g, "c")
// // //     .replace(/ğ/g, "g")
// // //     .replace(/ı/g, "i")
// // //     .replace(/ö/g, "o")
// // //     .replace(/ş/g, "s")
// // //     .replace(/ü/g, "u")
// // //     .replace(/[^a-z0-9 ]/g, "")
// // //     .replace(/\s+/g, "-");

// // // const Section1 = () => {
// // //   return (
// // //     <section className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
// // //       {/* Orta Hizmet Kartları */}
// // //       <div className="md:col-span-2">
// // //         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
// // //           {services.map((service, idx) => (
// // //             <div key={idx} className="text-center">
// // //               <Link
// // //                 to={service.link}
// // //                 className="block border border-gray-300 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
// // //               >
// // //                 <img
// // //                   src={service.image}
// // //                   alt={service.title}
// // //                   className="w-full h-[160px] object-cover"
// // //                 />
// // //               </Link>
// // //               <div className="mt-2 font-semibold text-sm md:text-base text-green-500">
// // //                 {service.title}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <h2 className="text-lg md:text-2xl font-bold text-green-600 mb-4 text-center md:text-left">
// // //           EryamanHALI YIKAMA
// // //         </h2>
// // //         <p className="text-gray-700 mb-3 text-sm md:text-base">
// // //           EryamanHalı Yıkama olarak, halılarınızı gönül rahatlığıyla bizlere emanet edebilirsiniz.
// // //           Uygun fiyat politikamız ve üstün teknolojiye sahip ürünlerimiz sayesinde zirvede iş yerimizi korumaya devam ediyoruz.
// // //         </p>
// // //         <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
// // //           <li>EryamanHalı Yıkama, cinsi fark etmeksizin tüm halılarınızı titizlikle temizlemektedir.</li>
// // //           <li>Halı yıkama işleminde kullandığımız deterjanlar tamamen 1. sınıf ürünlerdir.</li>
// // //           <li>Halılarınız kapınıza kadar hızlıca gelip tekrar teslim edilmektedir.</li>
// // //           <li>Halılar en hijyenik şartlarda özel sistemle temizlenerek teslim edilir.</li>
// // //           <li>Bizim için her zaman müşteri memnuniyeti ön plandadır.</li>
// // //         </ul>

// // //         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
// // //           <img src="/images/person.png" alt="Person" className="h-28 w-auto" />
// // //           <div className="text-center sm:text-left">
// // //             <h4 className="font-bold text-[#AD7000] mb-1">Çalışma Saatlerimiz</h4>
// // //             <p className="text-sm text-gray-800">
// // //               Hafta içi: 08.00 - 20.00<br />
// // //               Cmt ve Pzr: 08.00 - 20.00
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Sol Menü */}
// // //       <aside className="space-y-10 md:space-y-10">
// // //         <div className="flex flex-col items-center md:items-start">
// // //           <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// // //             Sıkça Sorulan<br />Sorular
// // //           </h3>
// // //          <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// // //   {[
// // //     "Halımi ne sıklıkla yıkatmam gerekir?",
// // //     "Koltuklar Ne Kadar Zamanda Kurur?",
// // //     "Halı Tamiri Yapıyor musunuz?",
// // //     "Halılar Nasıl Yıkanıyor?",
// // //     "Servis Saatleri Nasıl ?",
// // //     "Hangi Tür Halıları Yıkıyorsunuz?",
// // //     "Hangi Deterjanlar ?",
// // //     "Halılar kaç günde teslim ediliyor?",
// // //     "Servis Ücreti Ne Kadar ?",
// // //   ].map((item, idx) => (
// // //     <li key={idx} className="leading-5">
// // //       <Link
// // //         to="/faq"
// // //         className="hover:underline block transition duration-200"
// // //       >
// // //         {item}
// // //       </Link>
// // //     </li>
// // //   ))}
// // // </ul>

// // //         </div>

// // //         <div className="flex flex-col items-center md:items-start">
// // //           <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// // //             Hizmet Bölgelerimiz
// // //           </h3>
// // //           <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// // //             {sideLinks.map((region, idx) => (
// // //               <li key={idx} className="leading-5">
// // //                 <Link to={`/bolge/${slugify(region)}`} className="hover:underline">
// // //                   {region}
// // //                 </Link>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       </aside>
// // //     </section>
// // //   );
// // // };

// // // export default Section1;
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

// // // ✅ Eryaman odaklı Hizmet Bölgelerimiz
// // const sideLinks = [
// //   "Eryaman 1. Etap Halı Yıkama",
// //   "Eryaman 2. Etap Halı Yıkama",
// //   "Eryaman 3. Etap Halı Yıkama",
// //   "Eryaman 4. Etap Halı Yıkama",
// //   "Eryaman 5. Etap Halı Yıkama",
// //   "Göksu Halı Yıkama",
// //   "Güzelkent Halı Yıkama",
// //   "Şeker Mahallesi Halı Yıkama",
// //   "Tunahan Mahallesi Halı Yıkama",
// //   "Altay Mahallesi Halı Yıkama",
// //   "Yeşiltepe Mahallesi Halı Yıkama",
// //   "Bağlıca Halı Yıkama",
// //   "Elvankent Halı Yıkama",
// //   "Etimesgut Halı Yıkama",
// //   "Batıkent Halı Yıkama",
// // ];

// // // ✅ Türkçe karakterleri slug'a dönüştüren fonksiyon (Eryaman 1. Etap için nokta da kalksın)
// // const slugify = (text) =>
// //   text
// //     .toLowerCase()
// //     .replace(/\./g, "") // 1. etap -> 1 etap
// //     .replace(/ç/g, "c")
// //     .replace(/ğ/g, "g")
// //     .replace(/ı/g, "i")
// //     .replace(/ö/g, "o")
// //     .replace(/ş/g, "s")
// //     .replace(/ü/g, "u")
// //     .replace(/[^a-z0-9 ]/g, "")
// //     .replace(/\s+/g, "-");

// // const Section1 = () => {
// //   return (
// //     <section className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
// //       {/* Orta Hizmet Kartları */}
// //       <div className="md:col-span-2">

// //   {/* ✅ Başlık – mobilde büyük, desktop aynı */}
// //   <h2 className="text-2xl md:text-2xl font-bold text-blue-600 mb-4 text-center md:text-left">
// //     ERYAMAN HALI-KOLTUK YIKAMA
// //   </h2>

// //   {/* ✅ Açıklama – mobilde büyük + iki yana yaslı */}
// //   <p className="text-gray-700 mb-4 text-lg md:text-base text-justify md:text-left leading-relaxed">
// //     Eryaman Halı Yıkama olarak halılarınızı gönül rahatlığıyla bize emanet edebilirsiniz.
// //     Uygun fiyat, hijyenik yıkama ve randevulu ücretsiz servis anlayışıyla Eryaman’ın tüm etaplarına
// //     düzenli alım–teslimat sağlıyoruz.
// //   </p>

// //   {/* ✅ Liste – mobilde büyük + justify */}
// //   <ul className="list-disc ml-5 text-gray-700 space-y-3 text-base md:text-base text-justify md:text-left leading-relaxed">
// //     <li>Eryaman ve çevresinde tüm halı türlerine uygun profesyonel yıkama uygulanır.</li>
// //     <li>Kullandığımız temizlik ürünleri tekstil yüzeylerine uygun ve güvenli ürünlerdir.</li>
// //     <li>Halılarınız randevulu şekilde adresinizden alınır, temizlenip paketlenerek teslim edilir.</li>
// //     <li>Kurutma süreci kontrollü yapılır; koku ve nem riski azaltılır.</li>
// //     <li>Hedefimiz her zaman yüksek memnuniyet ve düzenli hizmet kalitesidir.</li>
// //   </ul>

// //   {/* ✅ Çalışma saatleri */}
// //   <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
// //     <img src="/images/person.png" alt="Person" className="h-28 w-auto" />

// //     <div className="text-center sm:text-left">
// //       <h4 className="font-bold text-[#AD7000] mb-1">Çalışma Saatlerimiz</h4>

// //       <p className="text-base md:text-sm text-gray-800 leading-relaxed">
// //         Hafta içi: 08.00 - 20.00
// //         <br />
// //         Cumartesi - Pazar: 08.00 - 20.00
// //       </p>

// //       {/* ✅ Hizmet kartları */}
// //       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 mb-8">
// //         {services.map((service, idx) => (
// //           <div key={idx} className="text-center">
// //             <Link
// //               to={service.link}
// //               className="block border border-gray-300 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
// //             >
// //               <img
// //                 src={service.image}
// //                 alt={service.title}
// //                 className="w-full h-[160px] object-cover"
// //               />
// //             </Link>

// //             <div className="mt-2 font-semibold text-sm md:text-base text-green-600">
// //               {service.title}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </div>

// // </div>


// //       {/* Sağ Menü */}
// //       <aside className="space-y-10 md:space-y-10">
// //         <div className="flex flex-col items-center md:items-start">
// //           <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// //             Sıkça Sorulan
// //             <br />
// //             Sorular
// //           </h3>

// //           <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// //             {[
// //               "Halıyı ne sıklıkla yıkatmam gerekir?",
// //               "Koltuklar ne kadar zamanda kurur?",
// //               "Halı tamiri yapıyor musunuz?",
// //               "Halılar nasıl yıkanıyor?",
// //               "Servis saatleri nasıl?",
// //               "Hangi tür halıları yıkıyorsunuz?",
// //               "Hangi deterjanları kullanıyorsunuz?",
// //               "Halılar kaç günde teslim ediliyor?",
// //               "Servis ücreti ne kadar?",
// //             ].map((item, idx) => (
// //               <li key={idx} className="leading-5">
// //                 <Link to="/faq" className="hover:underline block transition duration-200">
// //                   {item}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div className="flex flex-col items-center md:items-start">
// //           <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
// //             Hizmet Bölgelerimiz
// //           </h3>

// //           <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full md:max-w-[280px]">
// //             {sideLinks.map((region, idx) => (
// //               <li key={idx} className="leading-5">
// //                 <Link to={`/bolge/${slugify(region)}`} className="hover:underline">
// //                   {region}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </aside>
// //     </section>
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
//   "Eryaman 1. Etap Halı Yıkama",
//   "Eryaman 2. Etap Halı Yıkama",
//   "Eryaman 3. Etap Halı Yıkama",
//   "Eryaman 4. Etap Halı Yıkama",
//   "Eryaman 5. Etap Halı Yıkama",
//   "Göksu Halı Yıkama",
//   "Güzelkent Halı Yıkama",
//   "Şeker Mahallesi Halı Yıkama",
//   "Tunahan Mahallesi Halı Yıkama",
//   "Altay Mahallesi Halı Yıkama",
//   "Yeşiltepe Mahallesi Halı Yıkama",
//   "Bağlıca Halı Yıkama",
//   "Elvankent Halı Yıkama",
//   "Etimesgut Halı Yıkama",
//   "Batıkent Halı Yıkama",
// ];

// const slugify = (text) =>
//   text
//     .toLowerCase()
//     .replace(/\./g, "")
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
//     <section className="bg-[#f7efe3] px-[2px] py-10 md:py-16">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

//         {/* Sol Ana İçerik */}
//         <div className="lg:col-span-2 bg-white rounded-[28px] shadow-xl overflow-hidden border border-[#eadcc8]">

//           {/* Üst Premium Başlık */}
//           <div className="bg-gradient-to-r from-[#09213f] via-[#12365f] to-[#b98545] px-5 py-8 md:px-10 text-white">
//             <div className="text-center md:text-left">
//               <p className="text-[#d7a760] tracking-[6px] text-sm mb-2">
//                 ✦ ✦ ✦
//               </p>

//               <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
//                 ERYAMAN
//                 <span className="block text-[#d7a760] font-serif italic font-normal">
//                   Halı Yıkama
//                 </span>
//               </h2>

//               <p className="mt-4 text-sm md:text-base text-[#f8efe3] max-w-2xl leading-relaxed">
//                 Halı yıkamada profesyonel çözüm, derinlemesine hijyen,
//                 güvenli hizmet ve ücretsiz servis ayrıcalığı.
//               </p>
//             </div>
//           </div>

//           {/* Rozetler */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 md:px-8 -mt-7 relative z-10">
//             {[
//               "Doğa Dostu Ürünler",
//               "%100 Müşteri Memnuniyeti",
//               "Hızlı Teslimat",
//               "Uygun Fiyat Garantisi",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg border border-[#eadcc8] px-3 py-4 text-center"
//               >
//                 <div className="text-[#b98545] text-2xl mb-1">✦</div>
//                 <p className="text-[12px] md:text-sm font-bold text-[#09213f]">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Açıklama */}
//           <div className="px-5 md:px-10 py-8">
//             <h3 className="text-2xl md:text-3xl font-bold text-[#09213f] mb-4">
//               Temizliğin adresi,
//               <span className="block text-[#b98545] font-serif italic font-normal">
//                 içiniz rahat!
//               </span>
//             </h3>

//             <p className="text-gray-700 text-[16px] md:text-[17px] leading-8 text-justify">
//               Eryaman Halı Yıkama olarak halılarınızı hijyenik, güvenli ve
//               profesyonel yöntemlerle temizliyoruz. Uygun fiyat, randevulu
//               ücretsiz servis ve düzenli alım-teslimat anlayışıyla Eryaman’ın
//               tüm etaplarına kaliteli hizmet sunuyoruz.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
//               {[
//                 "Tüm halı türlerine uygun profesyonel yıkama uygulanır.",
//                 "Tekstil yüzeylerine uygun güvenli temizlik ürünleri kullanılır.",
//                 "Halılarınız adresinizden alınır, paketlenerek teslim edilir.",
//                 "Kurutma süreci kontrollü yapılır; koku ve nem riski azaltılır.",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 bg-[#fbf6ef] rounded-2xl p-4 border border-[#eadcc8]"
//                 >
//                   <span className="bg-[#b98545] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0">
//                     ✓
//                   </span>
//                   <p className="text-sm md:text-base text-[#09213f] font-medium">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Çalışma Saatleri */}
//             <div className="mt-8 bg-[#09213f] rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-5 text-white">
//               <img
//                 src="/images/person.png"
//                 alt="Personel"
//                 className="h-28 w-auto"
//               />

//               <div className="text-center md:text-left">
//                 <h4 className="text-[#d7a760] text-xl font-bold mb-2">
//                   Çalışma Saatlerimiz
//                 </h4>
//                 <p className="text-sm md:text-base leading-7">
//                   Hafta içi: 08.00 - 20.00
//                   <br />
//                   Cumartesi - Pazar: 08.00 - 20.00
//                 </p>
//               </div>
//             </div>

//             {/* Hizmet Kartları */}
//             {/* PREMIUM HİZMET KARTLARI */}
// <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//   {services.map((service, idx) => (
//     <Link
//       key={idx}
//       to={service.link}
//       className="group relative overflow-hidden rounded-[32px] bg-white border border-[#eadcc8] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.14)] transition-all duration-500"
//     >
//       {/* Görsel */}
//       <div className="relative h-[240px] overflow-hidden">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#091c33]/90 via-[#091c33]/20 to-transparent" />

//         {/* Premium Badge */}
//         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#09213f] px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-lg">
//           PROFESYONEL HİZMET
//         </div>

//         {/* Başlık */}
//         <div className="absolute bottom-0 left-0 w-full p-6">
//           <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
//             {service.title}
//           </h3>

//           <div className="w-20 h-[3px] bg-[#d7a760] rounded-full mt-3" />
//         </div>
//       </div>

//       {/* Alt İçerik */}
//       {/* Alt İçerik */}
// <div className="p-5 bg-[#fffaf4]">
//   <p className="text-[#5c6570] text-sm leading-7">
//     Hijyenik yıkama, profesyonel ekipman ve ücretsiz servis desteğiyle
//     kaliteli hizmet sunuyoruz.
//   </p>

//   <div className="mt-5 flex items-center justify-between gap-4">
//     <div>
//       <p className="text-[#b98545] text-[11px] tracking-[2px] uppercase font-bold mb-1">
//         Eryaman Hizmetleri
//       </p>

//       <h4 className="text-[#09213f] text-lg font-extrabold">
//         {service.title}
//       </h4>
//     </div>

//     <span className="w-11 h-11 rounded-full bg-[#09213f] text-white flex items-center justify-center text-xl shadow-md group-hover:bg-[#b98545] transition">
//       →
//     </span>
//   </div>
// </div>

//         {/* Özellikler */}
//         {/* <div className="flex flex-wrap gap-2 mt-5">
//           <span className="bg-[#09213f] text-white text-xs px-3 py-2 rounded-full">
//             Ücretsiz Servis
//           </span>

//           <span className="bg-[#b98545] text-white text-xs px-3 py-2 rounded-full">
//             Hızlı Teslimat
//           </span>

//           <span className="bg-[#e9dcc7] text-[#09213f] text-xs px-3 py-2 rounded-full font-semibold">
//             Profesyonel Temizlik
//           </span>
//         </div> */}

//         {/* Buton */}
//         <div className="mt-6 flex items-center justify-between">
//           <div>
//             <p className="text-[#b98545] text-xs tracking-[3px] uppercase font-bold">
//               Eryaman Halı Yıkama
//             </p>

//             <p className="text-[#09213f] font-bold text-lg mt-1">
//               Detaylı İncele
//             </p>
//           </div>

//           <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#09213f] to-[#12365f] flex items-center justify-center shadow-xl group-hover:translate-x-2 transition duration-500">
//             <span className="text-white text-2xl">→</span>
//           </div>
//         </div>
//       {/* </div> */}
//     </Link>
//   ))}
// </div>
//           </div>
//         </div>

//         {/* Sağ Alan */}
//         <aside className="space-y-6">

//           {/* SSS */}
//           <div className="bg-[#09213f] rounded-[28px] p-5 shadow-xl border border-[#1d3f68]">
//             <h3 className="text-[#d7a760] text-xl font-bold mb-4 text-center">
//               Sıkça Sorulan Sorular
//             </h3>

//             <ul className="space-y-3">
//               {[
//                 "Halıyı ne sıklıkla yıkatmam gerekir?",
//                 "Koltuklar ne kadar zamanda kurur?",
//                 "Halı tamiri yapıyor musunuz?",
//                 "Halılar nasıl yıkanıyor?",
//                 "Servis saatleri nasıl?",
//                 "Hangi tür halıları yıkıyorsunuz?",
//                 "Halılar kaç günde teslim ediliyor?",
//                 "Servis ücreti ne kadar?",
//               ].map((item, idx) => (
//                 <li key={idx}>
//                   <Link
//                     to="/faq"
//                     className="block bg-white/10 hover:bg-white/20 text-white rounded-xl px-4 py-3 text-sm transition"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Hizmet Bölgeleri */}
//           <div className="bg-white rounded-[28px] p-5 shadow-xl border border-[#eadcc8]">
//             <h3 className="text-[#09213f] text-xl font-bold mb-4 text-center">
//               Hizmet Bölgelerimiz
//             </h3>

//             <ul className="space-y-3">
//               {sideLinks.map((region, idx) => (
//                 <li key={idx}>
//                   <Link
//                     to={`/bolge/${slugify(region)}`}
//                     className="block bg-[#fbf6ef] hover:bg-[#09213f] hover:text-white text-[#09213f] border border-[#eadcc8] rounded-xl px-4 py-3 text-sm font-medium transition"
//                   >
//                     {region}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>
//       </div>
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

const serviceDescriptions = {
  "Halı Yıkama":
    "Eryaman halı yıkama hizmetimizde halılarınız profesyonel makinelerle yıkanır, hijyenik şekilde kurutulur ve paketli teslim edilir.",
  "Koltuk Yıkama":
    "Eryaman koltuk yıkama hizmetimizde koltuklarınız yerinde temizlenir; leke, toz ve kötü kokuya karşı hijyenik temizlik sağlanır.",
  "Yatak Yıkama":
    "Eryaman yatak yıkama hizmetimizde yatak yüzeyindeki toz, ter izi, leke ve kötü kokular profesyonel ekipmanlarla temizlenir.",
  "Yorgan Yıkama":
    "Eryaman yorgan yıkama hizmetimizde yorgan ve battaniyeleriniz hijyenik ortamda yıkanır, kurutulur ve paketlenerek teslim edilir.",
  "Stor Perde Yıkama":
    "Eryaman stor perde yıkama hizmetimizde perdeleriniz kumaş yapısına uygun şekilde temizlenir, hijyenik ve özenli teslim edilir.",
  "Halı-Tamir Overlok":
    "Eryaman halı tamiri ve overlok hizmetimizde yıpranan halı kenarları onarılır, halılarınız daha düzgün ve kullanışlı hale getirilir.",
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\./g, "")
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
    <section className="bg-[#f7efe3] px-[2px] py-10 md:py-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[28px] shadow-xl overflow-hidden border border-[#eadcc8]">
          <div className="bg-gradient-to-r from-[#09213f] via-[#12365f] to-[#b98545] px-5 py-8 md:px-10 text-white">
            <p className="text-[#d7a760] tracking-[6px] text-sm mb-2">
              ✦ ✦ ✦
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              ERYAMAN
              <span className="block text-[#d7a760] font-serif italic font-normal">
                Halı Yıkama
              </span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-[#f8efe3] max-w-2xl leading-relaxed">
              Halı yıkamada profesyonel çözüm, derinlemesine hijyen, güvenli
              hizmet ve ücretsiz servis ayrıcalığı.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 md:px-8 -mt-7 relative z-10">
            {[
              "Doğa Dostu Ürünler",
              "%100 Müşteri Memnuniyeti",
              "Hızlı Teslimat",
              "Uygun Fiyat Garantisi",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-[#eadcc8] px-3 py-4 text-center"
              >
                <div className="text-[#b98545] text-2xl mb-1">✦</div>
                <p className="text-[12px] md:text-sm font-bold text-[#09213f]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="px-5 md:px-10 py-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#09213f] mb-4">
              Temizliğin adresi,
              <span className="block text-[#b98545] font-serif italic font-normal">
                içiniz rahat!
              </span>
            </h3>

            <p className="text-gray-700 text-[16px] md:text-[17px] leading-8 text-justify">
              Eryaman Halı Yıkama olarak halılarınızı hijyenik, güvenli ve
              profesyonel yöntemlerle temizliyoruz. Uygun fiyat, randevulu
              ücretsiz servis ve düzenli alım-teslimat anlayışıyla Eryaman’ın
              tüm etaplarına kaliteli hizmet sunuyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
              {[
                "Tüm halı türlerine uygun profesyonel yıkama uygulanır.",
                "Tekstil yüzeylerine uygun güvenli temizlik ürünleri kullanılır.",
                "Halılarınız adresinizden alınır, paketlenerek teslim edilir.",
                "Kurutma süreci kontrollü yapılır; koku ve nem riski azaltılır.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#fbf6ef] rounded-2xl p-4 border border-[#eadcc8]"
                >
                  <span className="bg-[#b98545] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0">
                    ✓
                  </span>
                  <p className="text-sm md:text-base text-[#09213f] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#09213f] rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-5 text-white">
              <img
                src="/images/person.png"
                alt="Personel"
                className="h-28 w-auto"
              />

              <div className="text-center md:text-left">
                <h4 className="text-[#d7a760] text-xl font-bold mb-2">
                  Çalışma Saatlerimiz
                </h4>
                <p className="text-sm md:text-base leading-7">
                  Hafta içi: 08.00 - 20.00
                  <br />
                  Cumartesi - Pazar: 08.00 - 20.00
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="text-center mb-7">
                <p className="text-[#b98545] text-xs tracking-[4px] font-bold uppercase">
                  Profesyonel Çözümler
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#09213f] mt-2">
                  Hizmetlerimiz
                </h3>
              </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {services.map((service, idx) => (
    <Link
      key={idx}
      to={service.link}
      className="group block bg-[#fffaf4] rounded-[24px] overflow-hidden border border-[#eadcc8] shadow-[0_8px_28px_rgba(9,33,63,0.10)] hover:shadow-[0_14px_38px_rgba(9,33,63,0.18)] transition-all duration-500"
    >
      <div className="relative h-[185px] overflow-hidden">
        <img
          src={service.image}
          alt={`Eryaman ${service.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09213f]/90 via-[#09213f]/30 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[#d7a760] text-[11px] tracking-[3px] font-bold uppercase mb-1">
            Eryaman Profesyonel Temizlik
          </p>

          <h4 className="text-white text-2xl font-extrabold leading-tight">
            Eryaman {service.title}
          </h4>

          <div className="w-16 h-[3px] bg-[#d7a760] rounded-full mt-2" />
        </div>
      </div>

      <div className="p-4">
        <p className="text-[#26364a] text-[15px] leading-7 font-medium">
          {serviceDescriptions[service.title]}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <span className="bg-white border border-[#eadcc8] rounded-xl px-3 py-2 text-[12px] font-bold text-[#09213f] text-center">
            Ücretsiz Servis
          </span>

          <span className="bg-white border border-[#eadcc8] rounded-xl px-3 py-2 text-[12px] font-bold text-[#09213f] text-center">
            Hijyenik Yıkama
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[#eadcc8] pt-4">
          <span className="text-[#09213f] font-extrabold text-sm">
            Detaylı İncele
          </span>

          <span className="w-10 h-10 rounded-full bg-[#09213f] text-white flex items-center justify-center text-xl group-hover:bg-[#b98545] group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-[#09213f] rounded-[28px] p-5 shadow-xl border border-[#1d3f68]">
            <h3 className="text-[#d7a760] text-xl font-bold mb-4 text-center">
              Sıkça Sorulan Sorular
            </h3>

            <ul className="space-y-3">
              {[
                "Halıyı ne sıklıkla yıkatmam gerekir?",
                "Koltuklar ne kadar zamanda kurur?",
                "Halı tamiri yapıyor musunuz?",
                "Halılar nasıl yıkanıyor?",
                "Servis saatleri nasıl?",
                "Hangi tür halıları yıkıyorsunuz?",
                "Halılar kaç günde teslim ediliyor?",
                "Servis ücreti ne kadar?",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="/faq"
                    className="block bg-white/10 hover:bg-white/20 text-white rounded-xl px-4 py-3 text-sm transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[28px] p-5 shadow-xl border border-[#eadcc8]">
            <h3 className="text-[#09213f] text-xl font-bold mb-4 text-center">
              Hizmet Bölgelerimiz
            </h3>

            <ul className="space-y-3">
              {sideLinks.map((region, idx) => (
                <li key={idx}>
                  <Link
                    to={`/bolge/${slugify(region)}`}
                    className="block bg-[#fbf6ef] hover:bg-[#09213f] hover:text-white text-[#09213f] border border-[#eadcc8] rounded-xl px-4 py-3 text-sm font-medium transition"
                  >
                    {region}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Section1;