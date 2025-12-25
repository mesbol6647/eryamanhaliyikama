import React from "react";
import ServiceCards from "../components/ServiceCards";
import QuickContactBox from "../components/QuickContactBox";
import PromoBanner from "../components/PromoBanner";
import DasboardBlog from "./DashboardBlog";

const FaqPage = () => {
  const questions = [
    {
      question: "Eryaman Halı Yıkama hizmetiniz hangi bölgeleri kapsıyor?",
      answer:
        "Ankara Eryaman’ın tamamında ücretsiz servisimiz var. Özellikle Eryaman 1-2-3-4-5. Etap, Göksu, Güzelkent, Şeker, Tunahan, Altay, Yeşiltepe çevresinde düzenli alım-teslimat yapıyoruz."
    },
    {
      question: "Eryaman’dan halıları nasıl teslim alıyorsunuz?",
      answer:
        "Randevu oluşturduktan sonra ekibimiz Eryaman’daki adresinize gelir, halılarınızı yerinden alır ve sistemimize kayıt eder. Teslim alım sırasında halılar tek tek kontrol edilip fiş/barkod süreci başlatılır."
    },
    {
      question: "Eryaman’da alım-teslimat saatleriniz nedir?",
      answer:
        "Genellikle 09:00 - 21:00 arası servis sağlıyoruz. Yoğunluk durumuna göre aynı gün alım veya ertesi gün randevu verilebilir."
    },
    {
      question: "Halı yıkama teslimat süresi kaç gün sürüyor?",
      answer:
        "Standart teslimat süremiz çoğu halıda 2-4 gün arasıdır. Hava şartları, halının kalınlığı ve kuruma süresi gibi etkenler teslimat süresini değiştirebilir."
    },
    {
      question: "Eryaman’da koltuk yıkama hizmetiniz var mı?",
      answer:
        "Evet. Eryaman’da koltuk yıkama, yatak yıkama/temizliği ve stor perde yıkama hizmetleri de sunuyoruz. Randevu ile yerinde hizmet veriyoruz."
    },
    {
      question: "Koltuk yıkama sonrası kuruma süresi ne kadar?",
      answer:
        "Ortalama 6-12 saat içinde kurur. Kış aylarında bu süre 12-24 saate uzayabilir. Pencere açıp havalandırma yapmanız ve ortamı sıcak tutmanız kuruma süresini kısaltır."
    },
    {
      question: "Yün halı ve el dokuması halıları yıkıyor musunuz?",
      answer:
        "Evet. Yün, el dokuma ve hassas halılar için özel yıkama prosedürü uyguluyoruz. Halının türüne göre uygun şampuan ve kontrollü kurutma yöntemi seçilir."
    },
    {
      question: "Leke çıkarma işlemi yapıyor musunuz?",
      answer:
        "Evet. Çay, kahve, yağ, idrar gibi yaygın lekelerde leke türüne özel uygulama yapıyoruz. Bazı eski/yanmış lekeler tamamen çıkmayabilir; teslim öncesi bilgilendirme yapılır."
    },
    {
      question: "Kullandığınız temizlik ürünleri çocuklar ve evcil hayvanlar için güvenli mi?",
      answer:
        "Evet. İnsan sağlığına uygun, tekstil yüzeylerine zarar vermeyen ürünler tercih ediyoruz. Hassasiyetiniz varsa (bebek/alerji/evcil hayvan) bize bildirmeniz yeterli."
    },
    {
      question: "Halılarımı nasıl paketleyip teslim ediyorsunuz?",
      answer:
        "Yıkama ve kurutma sonrası halılarınız hijyenik şekilde paketlenir ve temiz poşetlerle sarılarak adresinize teslim edilir. Paketleme sayesinde taşıma sırasında kirlenme riski oluşmaz."
    },
    {
      question: "Yerinde halı yıkama yapıyor musunuz?",
      answer:
        "Halı yıkamada genellikle yerinden alıp tesiste yıkama hizmeti sunuyoruz. (Yerinde hizmet daha çok koltuk/yatak gibi ürünlerde uygulanır.)"
    },
    {
      question: "Eryaman’daki apartman/site yönetimleri için toplu yıkama yapıyor musunuz?",
      answer:
        "Evet. Site/rezidans, apartman, cami, yurt, ofis gibi alanlar için toplu yıkamada özel fiyatlandırma yapıyoruz. Keşif ve planlamayı randevu ile oluşturuyoruz."
    },
    {
      question: "Fiyatlandırma nasıl yapılıyor?",
      answer:
        "Halı türü, m² ölçüsü ve adet sayısına göre fiyat belirlenir. Net fiyat için WhatsApp’tan halının ölçüsünü ve fotoğrafını gönderebilirsiniz."
    },
    {
      question: "Halılarım karışır mı veya kaybolur mu?",
      answer:
        "Hayır. Barkod sistemiyle her halı ayrı kayıt altına alınır. Bu sayede karışma/kaybolma riski minimuma indirilir ve süreç baştan sona takip edilir."
    },
    {
      question: "Eryaman dışında da hizmet veriyor musunuz?",
      answer:
        "Eryaman merkezli çalışıyoruz; ancak Etimesgut’un Eryaman’a yakın bölgelerine ve uygun güzergâhlara ek servisle hizmet verebildiğimiz durumlar oluyor."
    },
    {
      question: "Kampanya veya indirimleriniz var mı?",
      answer:
        "Dönemsel kampanyalar ve düzenli müşterilerimize özel indirimler uyguluyoruz. Güncel kampanyalar için web sitemizi ve WhatsApp hattımızı takip edebilirsiniz."
    }
  ];

  return (
    <>
      <DasboardBlog />

      <div className="bg-white min-h-screen py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sol Alan */}
          <aside className="space-y-6 md:col-span-1">
            <ServiceCards />
            {/* <PopularQuestionsAside /> */}
          </aside>

          {/* Orta Alan */}
          <main className="md:col-span-2">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-8">
              Eryaman Sıkça Sorulan Sorular
            </h2>

            <div className="space-y-8">
              {questions.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </main>

          {/* Sağ Alan */}
          <aside className="space-y-6 md:col-span-1">
            <QuickContactBox />
            <PromoBanner />
          </aside>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
