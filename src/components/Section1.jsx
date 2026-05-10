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

             <div className="grid grid-cols-1 gap-5 w-full">
  {services.map((service, idx) => (
    <Link
      key={idx}
      to={service.link}
      className="group block bg-[#fffaf4] rounded-[24px] overflow-hidden border border-[#eadcc8] shadow-[0_8px_28px_rgba(9,33,63,0.10)] hover:shadow-[0_14px_38px_rgba(9,33,63,0.18)] transition-all duration-500 no-underline"
    >
      <div className="relative h-[250px] overflow-hidden">
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

      <div className="p-8 md:p-7">
       <p className="text-[#26364a] text-[17px] leading-9 font-medium">
          {serviceDescriptions[service.title]}
        </p>

        {/* <div className="mt-5 flex flex-wrap gap-3">
         <span className="bg-white border border-[#eadcc8] rounded-xl px-3 py-2 text-[12px] font-bold text-[#09213f] text-center">
            Ücretsiz Servis
          </span>

         <span className="bg-white border border-[#eadcc8] rounded-xl px-3 py-2 text-[12px] font-bold text-[#09213f] text-center">
            Hijyenik Yıkama
          </span>
        </div> */}

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