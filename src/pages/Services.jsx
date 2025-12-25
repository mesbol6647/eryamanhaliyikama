
import React from "react";
import DashboardBlog from "../pages/DashboardBlog";
import Footer from "../components/Footer";
import ServiceCards from "../components/ServiceCards";
import QuickContactBox from "../components/QuickContactBox";
import PromoBanner from "../components/PromoBanner";
import PopularQuestionsAside from "../components/PopularQuestionsAside";
import CountdownPromo from "../components/CountdownPromo";
import MiniBlogPosts from "../components/MiniBlogPosts";
import ServiceAreaMap from "../components/ServiceAreaMap";
import TestimonialsBox from "../components/TestimonialsBox";

const ServicePage = () => {
  return (
    <>
      <DashboardBlog />
      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-6">
          <ServiceCards />
          <PopularQuestionsAside />
          <MiniBlogPosts />
          <ServiceAreaMap />
        </aside>

        <main className="lg:col-span-2 space-y-10">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-black text-center">Hizmetlerimiz</h1>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Halı Yıkama</h2>
            <p>
              Halılar, yaşam alanlarımızın en çok kirlenen eşyaları arasında yer alır. EryamanHalı Yıkama olarak tam otomatik makinelerde, özel halı şampuanlarıyla, her halı türüne özel yıkama protokolleri uyguluyoruz. Shaggy, el dokuma, yün ve makine halıları için ayrı ayrı işlemler yapılır. Yıkama sonrası 1200 devirli santrifüj makinelerde sıkma işlemi gerçekleştirilir ve ardından kurutma odalarımızda hijyenik koşullarda kurutulur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Koltuk Yıkama</h2>
            <p>
              Koltuklar evde en çok temas edilen eşyalardır. Kumaş yüzeylerinde zamanla toz, bakteri ve kötü koku birikir. Buharlı temizlik sistemimizle koltuklarınız derinlemesine temizlenir. Kumaş türüne göre leke çıkarıcı ön işlem uygulanır, ardından vakumlu yıkama ile koltuklarınız temizlenir. Kuruma süresi 3-4 saattir ve yerinde hizmet sunulmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Yorgan & Battaniye Yıkama</h2>
            <p>
              Yorgan ve battaniyeler özel tamburlu makinelerde yüksek sıcaklıkta, alerjenleri yok eden deterjanlarla yıkanır. Kurutma işlemi, yumuşak dokunun zarar görmemesi için düşük ısıda yapılır. Pamuklu, elyaf veya yün içeriğe sahip tüm ürünleriniz güvenle yıkanır. Hijyenik paketleme ile size teslim edilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Yatak Yıkama</h2>
            <p>
              Yataklar, bakteri ve mite oluşumunun en yoğun olduğu alanlardır. Endüstriyel vakumlu yatak yıkama makineleriyle yüzeyin derinlerine inilir. Özel dezenfektanlar sayesinde mikroorganizmalardan arındırılır. Yatak yıkama işlemi yerinde uygulanır ve yataklar 6-8 saat içerisinde kullanılabilir duruma gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Halı Tamiri & Overlok</h2>
            <p>
              Eskiyen, kenarları sökülen veya iplikleri çıkan halılarınız için profesyonel halı tamiri ve overlok hizmeti sunuyoruz. Halınızın türüne göre kenar tamiri, püskül yenileme, saçak değişimi gibi işlemler titizlikle yapılır. Böylece halılarınız estetik ve kullanışlı hale getirilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Perde Yıkama</h2>
            <p>
              Tül ve fon perdeler evin havasını etkileyen en önemli tekstil ürünlerindendir. Özel perde yıkama makinelerinde düşük ısıda ve hassas programlarla yıkanır. Buharlı ütüleme ile kırışıklıklar giderilir. Kuruma sonrası perdeleriniz askıya hazır şekilde teslim edilir. Yerinden alım ve montaj hizmetimiz mevcuttur.
            </p>
          </section>

          <div className="text-center pt-6 border-t mt-10">
            <p className="text-sm text-gray-600">
              Halı, koltuk, perde veya yatak temizliği için hemen bizimle iletişime geçin. Tüm hizmetlerde hijyen ve müşteri memnuniyeti garantisi sunuyoruz.
            </p>
          </div>
        </main>

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

export default ServicePage;
