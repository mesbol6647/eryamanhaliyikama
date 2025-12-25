import React from "react";
import DashboardBlog from "../pages/DashboardBlog";
import Footer from "../components/Footer";

// Bileşenler
import ServiceCards from "../components/ServiceCards";
import QuickContactBox from "../components/QuickContactBox";
import PromoBanner from "../components/PromoBanner";
import PopularQuestionsAside from "../components/PopularQuestionsAside";
import CountdownPromo from "../components/CountdownPromo";
import MiniBlogPosts from "../components/MiniBlogPosts";
import ServiceAreaMap from "../components/ServiceAreaMap";
import TestimonialsBox from "../components/TestimonialsBox";

const AboutPage = () => {
  return (
    <>
      <DashboardBlog />

      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sol Yan: Hizmetler + Popüler Sorular */}
        <aside className="space-y-6">
          <ServiceCards />
          <PopularQuestionsAside />
          <MiniBlogPosts />
          <ServiceAreaMap />
        </aside>

        {/* ANA İÇERİK - TAM ORTA */}
        <main className="lg:col-span-2 space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">Hakkımızda</h1>
            <p className="text-lg text-gray-800">
              Eryaman Halı Yıkama olarak Ankara / Etimesgut bölgesinde yıllardır
              halı temizliği alanında kalite, hijyen ve müşteri memnuniyeti odaklı
              hizmet veriyoruz. Gelişen teknolojiye ayak uyduran altyapımız ve
              profesyonel ekibimizle halılarınıza yeniden hayat kazandırıyoruz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Misyonumuz</h2>
            <p className="text-gray-800">
              Halılar sadece bir ev eşyası değil; sağlığınız, yaşam konforunuz ve
              evinizin hava kalitesi açısından da önemlidir. Misyonumuz; hijyenik,
              çevreye duyarlı ve kaliteli temizlik çözümleriyle müşterilerimize güven
              veren bir hizmet sunmaktır. Eryaman ve çevresindeki müşterilerimize,
              halılarına zarar vermeden derinlemesine temizlik sağlıyoruz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Vizyonumuz</h2>
            <p className="text-gray-800">
              Halı yıkama sektöründe dijitalleşen, kurumsallaşan ve müşteri memnuniyetini
              merkeze alan öncü firmalardan biri olmak. Temizlik teknolojilerindeki
              yenilikleri yakından takip ederek, Ankara’nın birçok noktasında güvenilir
              ve sürdürülebilir hizmet vermeyi hedefliyoruz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>✅ Tam otomatik halı yıkama makineleri</li>
              <li>✅ Antibakteriyel ve çocuk dostu temizlik ürünleri</li>
              <li>✅ Ücretsiz servis: Adresten alım ve adrese teslim</li>
              <li>✅ Güçlü sıkma ve hijyenik kurutma sistemi</li>
              <li>✅ Leke analizine göre özel işlem</li>
              <li>✅ Halı türüne özel yıkama protokolleri (yün, shaggy, el dokuma vs.)</li>
              <li>✅ Hızlı teslimat: 2-3 iş günü içerisinde</li>
              <li>✅ Müşteri destek hattı ve düzenli bilgilendirme</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Hizmet Verdiğimiz Bölgeler</h2>
            <p className="text-gray-800">
              Eryaman ve Etimesgut çevresinde ücretsiz servis imkanı sunuyoruz. Başlıca
              hizmet bölgelerimiz:
            </p>

            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-800">
              <li>Eryaman 1. Etap</li>
              <li>Eryaman 2. Etap</li>
              <li>Eryaman 3. Etap</li>
              <li>Eryaman 4. Etap</li>
              <li>Eryaman 5. Etap</li>
              <li>Göksu</li>
              <li>Güzelkent</li>
              <li>Şeker Mahallesi</li>
              <li>Tunahan Mahallesi</li>
              <li>Altay Mahallesi</li>
              <li>Yeşiltepe Mahallesi</li>
              <li>Bağlıca</li>
              <li>Elvankent</li>
              <li>Etimesgut Merkez</li>
              <li>Batıkent (yakın servis hattı)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Kullandığımız Teknoloji</h2>
            <p className="text-gray-800">
              Halılarınızın derinlemesine temizliği için tam otomatik fırçalı yıkama
              makineleri, yüksek devirli santrifüj sıkma sistemleri ve kontrollü
              kurutma alanları kullanıyoruz. Her halıya özel yıkama programı uygulayarak,
              halının cinsine ve kirlilik derecesine göre en doğru temizlik yöntemini
              belirliyoruz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Müşteri Portföyümüz</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Bireysel müşteriler</li>
              <li>Toplu konut ve site yönetimleri</li>
              <li>İşyeri ve ofisler</li>
              <li>Kreş, anaokulu ve okul yönetimleri</li>
              <li>Otel ve pansiyonlar</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Hijyen ve Sağlık</h2>
            <p className="text-gray-800">
              Tüm temizlik süreçlerimiz, insan sağlığına zararsız ve alerjen riski düşük
              ürünlerle gerçekleştirilir. Halıların içinde biriken toz, mite ve kötü koku
              problemlerine karşı derinlemesine temizlik sağlanır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Memnuniyet Garantisi</h2>
            <p className="text-gray-800">
              Temizliğinden memnun kalmadığınız halılar, inceleme sonrası ücretsiz olarak
              yeniden yıkanır. %100 müşteri memnuniyeti bizim için sadece bir vaat değil,
              temel ilkedir.
            </p>
          </div>

          <div className="text-center pt-6 border-t mt-10">
            <p className="text-sm text-gray-600">
              Daha fazla bilgi almak veya sipariş oluşturmak için bize{" "}
              <strong>7/24</strong> ulaşabilirsiniz. Eryaman Halı Yıkama olarak her zaman
              hizmetinizdeyiz.
            </p>
          </div>
        </main>

        {/* Sağ Yan: Hızlı İletişim + Kampanya */}
        <aside className="space-y-6">
          <QuickContactBox />
          <PromoBanner />
          <CountdownPromo />
          <TestimonialsBox />
        </aside>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
