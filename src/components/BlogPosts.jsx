
import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog/10.png";
import blog2 from "../assets/blog/11.png";
import blog3 from "../assets/blog/12.png";
import blog4 from "../assets/blog/13.png";
import blog5 from "../assets/blog/14.png";
import blog6 from "../assets/blog/15.png";
import blog7 from "../assets/blog/16.png";
import blog8 from "../assets/blog/17.png";
import blog9 from "../assets/blog/18.png";

const VipTransferBlog = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      author: "Eryaman Halı Yıkama",
      date: "6 Mart 2025",
      title: "Shaggy Halılar Nasıl Yıkanır?",
      description: "Yüksek tüylü shaggy halıların profesyonel temizlik adımları ve öneriler."
    },
    {
      id: 2,
      image: blog2,
      author: "Eryaman Halı Yıkama",
      date: "4 Şubat 2025",
      title: "Koltuk Yıkamada Dikkat Edilmesi Gerekenler",
      description: "Evde koltuk temizliği mi yaptıracaksınız? Profesyonel ipuçları burada."
    },
    {
      id: 3,
      image: blog3,
      author: "Eryaman Halı Yıkama",
      date: "2 Ocak 2025",
      title: "Yün Halılar İçin Doğru Temizlik Yöntemleri",
      description: "Yün halılar nasıl zarar görmeden yıkanır? İşte detaylı rehber."
    },
    {
      id: 4,
      image: blog4,
      author: "Eryaman Halı Yıkama",
      date: "7 Eylül 2022",
      title: "Stor Perdeler Nasıl Yıkanmalı?",
      description: "Zebra ve stor perdelerinizin ömrünü uzatacak temizlik yöntemleri."
    },
    {
      id: 5,
      image: blog5,
      author: "Eryaman Halı Yıkama",
      date: "8 Mayıs 2023",
      title: "Antibakteriyel Halı Temizliği Nedir?",
      description: "Mikroplara karşı özel solüsyonlarla yapılan antibakteriyel yıkamanın faydaları."
    },
    {
      id: 6,
      image: blog6,
      author: "Eryaman Halı Yıkama",
      date: "8 Ekim 2021",
      title: "Evcil Hayvanlı Evlerde Halı Bakımı",
      description: "Tüy, leke ve kokulara karşı etkili halı bakım yöntemleri."
    },
    {
      id: 7,
      image: blog7,
      author: "Eryaman Halı Yıkama",
      date: "9 Mayıs 2025",
      title: "Leke Çıkarma Teknikleri",
      description: "Zorlu halı lekeleri için pratik ve etkili çözümler."
    },
    {
      id: 8,
      image: blog8,
      author: "Eryaman Halı Yıkama",
      date: "9 Mayıs 2023",
      title: "Halı Kurutma Süreçleri",
      description: "Doğru kurutma teknikleri ile halılarınızın formunu koruyun."
    },
    {
      id: 9,
      image: blog9,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Profesyonel Halı Yıkama ile Evdeki Hijyen",
      description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
           Blog Yazıları
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
            >
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover mt-2"
                  style={{ height: "192px" }}
                />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <div className="text-sm text-gray-500">
                  {post.date} | {post.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipTransferBlog;
