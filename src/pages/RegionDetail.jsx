

import React from "react";
import { useParams } from "react-router-dom";
import blogDataTr from "../data/region.json";
import Footer from "../components/Footer";
import DashboardBlog from "./DashboardBlog";

// Bileşenler
import ServiceCards from "../components/ServiceCards";
import QuickContactBox from "../components/QuickContactBox";
import PromoBanner from "../components/PromoBanner";
import PopularQuestionsAside from "../components/PopularQuestionsAside";
import CountdownPromo from "../components/CountdownPromo";
import MiniBlogPosts from "../components/MiniBlogPosts";
import ServiceAreaMap from "../components/ServiceAreaMap";
import TestimonialsBox from "../components/TestimonialsBox";

const RegionDetail = () => {
  const { slug } = useParams();
  const blogData = blogDataTr["region"];
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 py-20">
        Blog bulunamadı
      </div>
    );
  }

  return (
    <>
      <DashboardBlog />
      
      {/* JSON'dan gelen başlık için ek div */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h1 className="text-3xl font-bold text-center mb-8">{post.title}</h1>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sol Yan: Hizmetler + Popüler Sorular */}
        <aside className="space-y-6">
          <ServiceCards />
          <PopularQuestionsAside />
          <MiniBlogPosts />
          <ServiceAreaMap />
        </aside>

        {/* Orta İçerik */}
        <main className="lg:col-span-2">
          {/* Buradaki başlık kaldırıldı çünkü artık en üstte gösteriliyor */}
          {post.sections.map((section, index) => (
            <div key={index} className="mb-10">
              {section.heading && (
                <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
              )}

              {section.paragraphs && (
                <div className="space-y-4 text-gray-800 leading-relaxed">
                  {section.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}

              {section.bulletPoints && (
                <ul className="list-disc list-inside space-y-2 text-gray-800 mt-4">
                  {section.bulletPoints.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
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

export default RegionDetail;