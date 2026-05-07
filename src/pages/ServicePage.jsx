import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/services.json";
import Footer from "../components/Footer";
import DashboardBlog from "./DashboardBlog";

const ServicePage = () => {
  const { slug } = useParams();
  const service = data.services[slug];

  if (!service) {
    return (
      <div className="text-white text-center py-24">
        <h1 className="text-2xl font-bold">Hizmet Bulunamadı</h1>
        <p className="text-gray-400 mt-2">
          Geçersiz bağlantı veya hizmet silinmiş olabilir.
        </p>
      </div>
    );
  }

  // const image = service.image || `/images/${slug}.png`; // (istersen içerikte kullanırsın)

  // ✅ Eryaman odaklı Hizmet Bölgelerimiz listesi
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

  // ✅ Türkçe karakterleri ve nokta gibi işaretleri slug'a dönüştüren fonksiyon
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\./g, "") // nokta kaldır (1. etap -> 1 etap)
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u")
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

  return (
    <>
      <DashboardBlog />

      <section className="bg-[#ebecee] text-black py-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* SOL ANA İÇERİK */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
              🧼 {service.title}
            </h1>

            <div className="text-black leading-relaxed space-y-4">
              {Array.isArray(service.content) &&
                service.content.map((line, i) => <p key={i}>{line}</p>)}

              {/* Hizmet Detayları */}
              {service.detailsTitle && Array.isArray(service.details) && (
                <>
                  <h2 className="text-2xl font-semibold mt-10 mb-4">
                    {service.detailsTitle}
                  </h2>
                  <ul className="list-disc ml-5 text-black space-y-2">
                    {service.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Kimler İçin Uygun */}
              {service.idealTitle && Array.isArray(service.ideal) && (
                <>
                  <h2 className="text-2xl font-semibold mt-10 mb-4">
                    {service.idealTitle}
                  </h2>
                  <ul className="list-disc ml-5 text-black space-y-2">
                    {service.ideal.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* SAĞ ASIDE */}
          <aside className="w-full md:w-1/3 space-y-10">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[18px] font-semibold text-[#AD7000] tracking-wide mb-1 text-center md:text-left">
                Sıkça Sorulan
                <br />
                Sorular
              </h3>

              <ul className="bg-[#1c1c1c] text-white text-[13px] px-4 py-3 rounded-xl space-y-2 w-full max-w-full">
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
                  <li
                    key={idx}
                    className="hover:underline cursor-pointer leading-5"
                  >
                    {item}
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
                    <Link
                      to={`/bolge/${slugify(region)}`}
                      className="hover:underline"
                    >
                      {region}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* İstersen CTA ekleyelim */}
              <div className="mt-4 text-[12px] text-gray-700">
                Eryaman ve çevresinde ücretsiz servis için hemen iletişime geçin.
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicePage;
