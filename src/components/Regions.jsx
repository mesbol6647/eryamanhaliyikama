
// import React from "react";
// import { Link } from "react-router-dom";

// import reg1 from "../assets/blog/10.png";
// import reg2 from "../assets/blog/11.png";
// import reg3 from "../assets/blog/12.png";
// import reg4 from "../assets/blog/13.png";
// import reg5 from "../assets/blog/14.png";
// import reg6 from "../assets/blog/15.png";
// import reg7 from "../assets/blog/16.png";
// import reg8 from "../assets/blog/17.png";
// import reg9 from "../assets/blog/18.png";
// import reg10 from "../assets/blog/13.png";
// import reg11 from "../assets/blog/14.png";
// import reg12 from "../assets/blog/15.png";
// import reg13 from "../assets/blog/16.png";
// import reg14 from "../assets/blog/17.png";
// import reg15 from "../assets/blog/18.png";

// const Regions = () => {
//   const RegionsDesc = [
//     {
//       id: 1,
//       slug: "atakent-hali-yikama",
//       image: reg1,
//       author: "EryamanHalı Yıkama",
//       date: "6 Mart 2025",
//       title: "Atakent Halı Yıkama",
//       description: "Yüksek tüylü shaggy halıların profesyonel temizlik adımları ve öneriler."
//     },
//     {
//       id: 2,
//       slug: "halkali-hali-yikama",
//       image: reg2,
//       author: "EryamanHalı Yıkama",
//       date: "4 Şubat 2025",
//       title: "Halkalı Halı Yıkama",
//       description: "Evde koltuk temizliği mi yaptıracaksınız? Profesyonel ipuçları burada."
//     },
//     {
//       id: 3,
//       image: reg3,
//         slug: "cennet-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "2 Ocak 2025",
//       title: "Cennet Halı Yıkama",
//       description: "Yün halılar nasıl zarar görmeden yıkanır? İşte detaylı rehber."
//     },
//     {
//       id: 4,
//       image: reg4,
//         slug: "gultepe-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "7 Eylül 2022",
//       title: "Gültepe Halı Yıkama",
//       description: "Zebra ve stor perdelerinizin ömrünü uzatacak temizlik yöntemleri."
//     },
//     {
//       id: 5,
//       image: reg5,
//         slug: "yesilova-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "8 Mayıs 2023",
//       title: "Yeşilova Halı Yıkama",
//       description: "Mikroplara karşı özel solüsyonlarla yapılan antibakteriyel yıkamanın faydaları."
//     },
//     {
//       id: 6,
//       image: reg6,
//         slug: "tevfikbey-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "8 Ekim 2021",
//       title: "Tevfikbey Halı Yıkama",
//       description: "Tüy, leke ve kokulara karşı etkili halı bakım yöntemleri."
//     },
//     {
//       id: 7,
//       image: reg7,
//         slug: "inonu-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "9 Mayıs 2025",
//       title: "İnönü Halı Yıkama",
//       description: "Zorlu halı lekeleri için pratik ve etkili çözümler."
//     },
//     {
//       id: 8,
//       image: reg8,
//         slug: "mehmet-akif-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "9 Mayıs 2023",
//       title: "Mehmet Akif Halı Yıkama",
//       description: "Doğru kurutma teknikleri ile halılarınızın formunu koruyun."
//     },
//     {
//       id: 9,
//         slug: "sefakoy-hali-yikama",
//       image: reg9,
//       author: "EryamanHalı Yıkama",
//       date: "10 Mayıs 2024",
//       title: "Sefaköy Halı Yıkama",
//       description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
//     },
//     {
//       id: 10,
//       image: reg10,
//         slug: "kanarya-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "10 Mayıs 2024",
//       title: "Kanarya Halı Yıkama",
//       description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
//     },
//     {
//       id: 11,
//       image: reg11,
//         slug: "ikitelli-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "10 Mayıs 2024",
//       title: "İkitelli Halı Yıkama",
//       description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
//     },
//     {
//       id: 12,
//       image: reg12,
//         slug: "sogutlucesme-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "10 Mayıs 2024",
//       title: "Söğütlüçeşme Halı Yıkama",
//       description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
//     },
//     {
//       id: 13,
//       image: reg13,
//         slug: "sultan-murat-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "10 Mayıs 2024",
//       title: "Sultan Murat Halı Yıkama",
//       description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
//     },
//     {
//       id: 14,
//       image: reg14,
//         slug: "yarimburgaz-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "10 Mayıs 2024",
//       title: "Yarımburgaz Halı Yıkama",
//       description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
//     },
//     {
//       id: 15,
//       image: reg15,
//         slug: "kemalpasa-hali-yikama",
//       author: "EryamanHalı Yıkama",
//       date: "10 Mayıs 2024",
//       title: "Kemalpaşa Halı Yıkama",
//       description: "Düzenli yıkamanın ev hijyenine katkısı hakkında bilmeniz gerekenler."
//     },
    
//   ];

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
//            Hizmet Verdiğimiz Bölgeler
//         </h2>
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {RegionsDesc.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
//             >
//              <Link to={`/bolge/${post.slug}`}>

//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full object-cover mt-2"
//                   style={{ height: "192px" }}
//                 />
//               </Link>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//   <Link to={`/bolge/${post.slug}`}>{post.title}</Link>
// </h3>

//                 <p className="text-gray-700 mb-4">{post.description}</p>
//                 <div className="text-sm text-gray-500">
//                   {post.date} | {post.author}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Regions;
import React from "react";
import { Link } from "react-router-dom";

import reg1 from "../assets/blog/10.png";
import reg2 from "../assets/blog/11.png";
import reg3 from "../assets/blog/12.png";
import reg4 from "../assets/blog/13.png";
import reg5 from "../assets/blog/14.png";
import reg6 from "../assets/blog/15.png";
import reg7 from "../assets/blog/16.png";
import reg8 from "../assets/blog/17.png";
import reg9 from "../assets/blog/18.png";
import reg10 from "../assets/blog/13.png";
import reg11 from "../assets/blog/14.png";
import reg12 from "../assets/blog/15.png";
import reg13 from "../assets/blog/16.png";
import reg14 from "../assets/blog/17.png";
import reg15 from "../assets/blog/18.png";

const Regions = () => {
  // ✅ Eryaman ve çevresi (Etimesgut hattı) bölge kartları
  const RegionsDesc = [
    {
      id: 1,
      Ankara: "eryaman-1-etap-hali-yikama",
      image: reg1,
      author: "Eryaman Halı Yıkama",
      date: "6 Mart 2025",
      title: "Eryaman 1. Etap Halı Yıkama",
      description:
        "Eryaman 1. Etap’ta halılarınız için yerinden alım, profesyonel yıkama ve hijyenik teslimat hizmeti."
    },
    {
      id: 2,
      Ankara: "eryaman-2-etap-hali-yikama",
      image: reg2,
      author: "Eryaman Halı Yıkama",
      date: "4 Şubat 2025",
      title: "Eryaman 2. Etap Halı Yıkama",
      description:
        "Eryaman 2. Etap’ta yün, shaggy ve makine halıları için güvenli temizlik ve hızlı teslimat."
    },
    {
      id: 3,
      Ankara: "eryaman-3-etap-hali-yikama",
      image: reg3,
      author: "Eryaman Halı Yıkama",
      date: "2 Ocak 2025",
      title: "Eryaman 3. Etap Halı Yıkama",
      description:
        "Eryaman 3. Etap’ta leke çıkarma, derin temizlik ve koku giderme işlemleriyle tertemiz halılar."
    },
    {
      id: 4,
      Ankara: "eryaman-4-etap-hali-yikama",
      image: reg4,
      author: "Eryaman Halı Yıkama",
      date: "7 Eylül 2024",
      title: "Eryaman 4. Etap Halı Yıkama",
      description:
        "Eryaman 4. Etap’ta halılarınız barkodla kayıt altına alınır, karışma riski olmadan teslim edilir."
    },
    {
      id: 5,
      Ankara: "eryaman-5-etap-hali-yikama",
      image: reg5,
      author: "Eryaman Halı Yıkama",
      date: "8 Mayıs 2024",
      title: "Eryaman 5. Etap Halı Yıkama",
      description:
        "Eryaman 5. Etap’ta hassas halılara özel yıkama prosedürleriyle güvenli temizlik."
    },
    {
      id: 6,
      Ankara: "goksu-hali-yikama",
      image: reg6,
      author: "Eryaman Halı Yıkama",
      date: "8 Ekim 2024",
      title: "Göksu Halı Yıkama",
      description:
        "Göksu bölgesinde ücretsiz servis, detaylı leke uygulaması ve hijyenik paketleme ile teslimat."
    },
    {
      id: 7,
      Ankara: "guzelkent-hali-yikama",
      image: reg7,
      author: "Eryaman Halı Yıkama",
      date: "9 Mayıs 2025",
      title: "Güzelkent Halı Yıkama",
      description:
        "Güzelkent’te halı yıkama hizmetinde derin temizlik + tam kurutma ile kötü koku riskini azaltıyoruz."
    },
    {
      id: 8,
      Ankara: "seker-mahallesi-hali-yikama",
      image: reg8,
      author: "Eryaman Halı Yıkama",
      date: "9 Mayıs 2024",
      title: "Şeker Mahallesi Halı Yıkama",
      description:
        "Şeker Mahallesi’nde yoğun kullanılan halılar için düzenli bakım ve profesyonel temizlik çözümleri."
    },
    {
      id: 9,
      Ankara: "tunahan-mahallesi-hali-yikama",
      image: reg9,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Tunahan Mahallesi Halı Yıkama",
      description:
        "Tunahan Mahallesi’nde anti-bakteriyel uygulama, leke çıkarma ve güvenli temizlik ürünleri."
    },
    {
      id: 10,
      Ankara: "altay-mahallesi-hali-yikama",
      image: reg10,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Altay Mahallesi Halı Yıkama",
      description:
        "Altay Mahallesi’nde yerinden alım ve programlı teslimat ile hızlı, düzenli hizmet."
    },
    {
      id: 11,
      Ankara: "yesiltepe-mahallesi-hali-yikama",
      image: reg11,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Yeşiltepe Mahallesi Halı Yıkama",
      description:
        "Yeşiltepe’de halılarınız kurutma ve paketleme aşamasından sonra tertemiz şekilde teslim edilir."
    },
    {
      id: 12,
      Ankara: "baglica-hali-yikama",
      image: reg12,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Bağlıca Halı Yıkama",
      description:
        "Bağlıca bölgesinde site/rezidans yoğunluğuna uygun randevulu alım-teslimat planı."
    },
    {
      id: 13,
      Ankara: "elvankent-hali-yikama",
      image: reg13,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Elvankent Halı Yıkama",
      description:
        "Elvankent’te halılarınız barkod sistemiyle takip edilir, karışmadan güvenle teslim edilir."
    },
    {
      id: 14,
      Ankara: "etimesgut-hali-yikama",
      image: reg14,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Etimesgut Halı Yıkama",
      description:
        "Etimesgut bölgesinde halı, koltuk, yatak ve stor perde temizliği için randevulu servis."
    },
    {
      id: 15,
      Ankara: "batikent-hali-yikama",
      image: reg15,
      author: "Eryaman Halı Yıkama",
      date: "10 Mayıs 2024",
      title: "Batıkent Halı Yıkama",
      description:
        "Batıkent’te ücretsiz servis güzergâhlarına göre alım-teslimat sağlıyor, hızlı teslimat hedefliyoruz."
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Hizmet Verdiğimiz Bölgeler
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {RegionsDesc.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
            >
              <Link to={`/bolge/${post.Ankara}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover mt-2"
                  style={{ height: "192px" }}
                />
              </Link>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link to={`/bolge/${post.Ankara}`} className="hover:underline">
                    {post.title}
                  </Link>
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

export default Regions;
