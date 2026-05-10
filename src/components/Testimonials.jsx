// import React from "react";
// import { Link } from "react-router-dom";

// const Testimonials = () => {
//   const reviews = [
//     {
//       name: "Ahmet Yılmaz",
//       comment: "Halı yıkama hizmetinden çok memnun kaldım. Halılarım tertemiz geldi, teşekkür ederim.",
//       rating: 5,
//     },
//     {
//       name: "Merve Kaya",
//       comment: "Koltuk yıkama işlemi sonrası adeta yeni gibi oldu. Ekip çok özenliydi.",
//       rating: 5,
//     },
//     {
//       name: "Seda Demir",
//       comment: "Stor perde yıkama hizmeti hızlı ve hijyenikti. Gözüm kapalı tekrar tercih ederim.",
//       rating: 4,
//     },
//   ];

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//           Müşteri Yorumları
//         </h2>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {reviews.map((review, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
//                   {review.name.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-900">{review.name}</p>
//                   <p className="text-sm text-yellow-500">
//                     {"★".repeat(review.rating)}
//                     {"☆".repeat(5 - review.rating)}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-gray-700 text-sm">{review.comment}</p>
//             </div>
//           ))}

//           <div className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-center items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
//             <Link
//               to="/yorum"
//               className="w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded"
//             >
//               Tüm Yorumları Gör
//             </Link>
//             <Link
//               to="/yorum-ekle"
//               className="w-full text-center bg-red-600 hover:bg-gray-200 text-white font-bold py-3 px-6 rounded"
//             >
//               Yorum Ekle
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
  {
    name: "Mustafa Aydın",
    comment:
      "Eryaman’da ilk defa bu kadar temiz çalışan bir halı yıkama firması gördüm. Halılarım mis gibi kokuyla geldi, teslimat da tam söyledikleri saatte yapıldı.",
    rating: 5,
    time: "2 gün önce",
    avatarLetter: "M",
    avatarColor: "bg-blue-600",
  },
  {
    name: "Ayşe Karataş",
    comment:
      "Koltuklarımızın rengi resmen değişti. Özellikle çocuk lekelerinin çıkacağını düşünmüyordum ama tertemiz olmuş.",
    rating: 5,
    time: "4 gün önce",
    avatarLetter: "A",
    avatarColor: "bg-pink-500",
  },
  {
    name: "Onur Çelik",
    comment:
      "Yorgan ve battaniyeleri yıkattım paketli şekilde teslim edildi. Temizlik konusunda gerçekten başarılılar.",
    rating: 5,
    time: "5 gün önce",
    avatarLetter: "O",
    avatarColor: "bg-green-600",
  },
  {
    name: "Elif Yılmaz",
    comment:
      "Stor perde yıkama hizmetinden çok memnun kaldım. Perdeler yeni alınmış gibi duruyor.",
    rating: 5,
    time: "1 hafta önce",
    avatarLetter: "E",
    avatarColor: "bg-red-500",
  },
  {
    name: "Hakan Demirtaş",
    comment:
      "Halıları almaya geldiklerinde çok kibarlardı. Teslim süreci de hızlı oldu. Tavsiye ederim.",
    rating: 5,
    time: "1 hafta önce",
    avatarLetter: "H",
    avatarColor: "bg-slate-500",
  },
  {
    name: "Fatma Şahin",
    comment:
      "Daha önce başka yerlere de verdim ama bu kadar temiz gelen olmamıştı. Özellikle mutfak halım tertemiz olmuş.",
    rating: 5,
    time: "9 gün önce",
    avatarLetter: "F",
    avatarColor: "bg-yellow-500",
  },
  {
    name: "Emre Korkmaz",
    comment:
      "Koltuk yıkama için çağırdık. Hem hızlı çalıştılar hem de detaylı temizlik yaptılar. Çok memnun kaldık.",
    rating: 5,
    time: "10 gün önce",
    avatarLetter: "E",
    avatarColor: "bg-indigo-600",
  },
  {
    name: "Gamze Arslan",
    comment:
      "Halı tamiri ve overlok işlemleri beklediğimden çok daha iyi yapılmış. Eski halım resmen yenilendi.",
    rating: 5,
    time: "2 hafta önce",
    avatarLetter: "G",
    avatarColor: "bg-orange-500",
  },
  {
    name: "Yusuf Kaya",
    comment:
      "Eryaman çevresinde güvenilir halı yıkama arıyorsanız kesinlikle öneririm. İşlerini düzgün yapıyorlar.",
    rating: 5,
    time: "2 hafta önce",
    avatarLetter: "Y",
    avatarColor: "bg-cyan-600",
  },
  {
    name: "Melek Aksoy",
    comment:
      "Yatak yıkama hizmeti aldık. Özellikle kötü kokular tamamen gitmiş. Çok temiz çalışıyorlar.",
    rating: 5,
    time: "3 hafta önce",
    avatarLetter: "M",
    avatarColor: "bg-rose-500",
  },
  {
    name: "Burak Yıldırım",
    comment:
      "Teslimat hızlıydı ve müşteri iletişimleri gerçekten çok iyi. Halılarım da gayet temiz geldi.",
    rating: 5,
    time: "3 hafta önce",
    avatarLetter: "B",
    avatarColor: "bg-teal-600",
  },
  {
    name: "Zehra Polat",
    comment:
      "Çocuklu evlerde halı temizliği çok önemli. Bu konuda gerçekten içimize sindi. Hijyen açısından başarılılar.",
    rating: 5,
    time: "1 ay önce",
    avatarLetter: "Z",
    avatarColor: "bg-fuchsia-600",
  },
  {
    name: "Kadir Koç",
    comment:
      "İlk kez hizmet aldım ama son olmayacak. Hem uygun fiyatlı hem kaliteli hizmet veriyorlar.",
    rating: 5,
    time: "1 ay önce",
    avatarLetter: "K",
    avatarColor: "bg-lime-600",
  },
  {
    name: "Sibel Acar",
    comment:
      "Perdelerim çok kirliydi ama tertemiz olmuş. Üstelik hızlı teslim ettiler.",
    rating: 5,
    time: "1 ay önce",
    avatarLetter: "S",
    avatarColor: "bg-violet-600",
  },
  {
    name: "Tolga Erdem",
    comment:
      "Google yorumlarına bakarak tercih ettim. Gerçekten anlatıldığı gibi temiz ve kaliteli hizmet veriyorlar.",
    rating: 5,
    time: "1 ay önce",
    avatarLetter: "T",
    avatarColor: "bg-emerald-600",
  },
];

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="bg-white py-8">
      <div className="max-w-[430px] mx-auto bg-white border border-gray-200 rounded-none shadow-sm">
        {/* Üst Başlık */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <h2 className="text-[22px] font-semibold text-[#3c4043]">
            Müşteri Yorumları
          </h2>

          <div className="flex items-center gap-4 text-gray-500">
            <span className="text-2xl leading-none">⋮</span>
            <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
              ˄
            </span>
          </div>
        </div>

        {/* Doğrulama */}
        <div className="px-4 text-[15px] text-[#70757a] flex items-center gap-1">
          <span>Yorumlar doğrulanmıştır</span>
          <span className="w-4 h-4 rounded-full border border-[#70757a] text-[11px] flex items-center justify-center">
            i
          </span>
        </div>

        {/* Google Puan Kartı */}
        <div className="px-4 mt-6">
          <div className="w-[195px] border border-gray-300 rounded-xl px-4 py-4">
            <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-1 mt-[2px]">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
    alt="Google"
    className="w-4 h-4"
  />

  <span className="text-[13px] text-[#4285f4] font-medium">
    Google
  </span>

  <span className="text-[13px] text-[#70757a]">
    yorumları
  </span>
</div>

              {/* <span className="text-gray-500 text-lg">↗</span> */}
            </div>

            <div className="flex items-end gap-8">
              <span className="text-[22px] font-medium text-[#202124]">
                4.85/5
              </span>
              <span className="text-[13px] text-[#70757a] mb-1">
                519 yorum
              </span>
            </div>
          </div>
        </div>

        {/* Yorum Ekle */}
        <div className="px-4 mt-5">
          <Link
            to="/yorum-ekle"
            className="h-[38px] rounded-full border border-gray-300 flex items-center justify-center gap-2 text-[#1a73e8] font-medium text-[15px]"
          >
            <span className="text-2xl leading-none">+</span>
            Yorum ekle
          </Link>
        </div>

        {/* Yorumlar */}
        <div className="mt-4">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="px-4 py-4 border-t border-gray-200 bg-white"
            >
              <div className="flex items-start gap-3">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-9 h-9 rounded-full ${review.avatarColor} text-white flex items-center justify-center text-lg font-semibold`}
                  >
                    {review.avatarLetter}
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[15px] font-medium text-[#3c4043] leading-5">
                        {review.name}
                      </p>

                      <div className="flex items-center gap-1 mt-[2px]">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
    alt="Google"
    className="w-4 h-4"
  />

  <span className="text-[13px] text-[#4285f4] font-medium">
    Google
  </span>

  <span className="text-[13px] text-[#70757a]">
    yorumları
  </span>
</div>
                    </div>

                    <span className="text-[#5f6368] text-xl leading-none">
                      ⋮
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-[13px]">
                    <span className="font-semibold text-[#202124]">
                      {review.rating}/5
                    </span>
                    <span className="text-[#70757a]">· {review.time}</span>
                    <span className="bg-gray-200 text-[#3c4043] rounded-full px-2 py-[2px] text-[12px]">
                      Yeni
                    </span>
                  </div>

                  <p className="mt-3 text-[15px] leading-6 text-[#5f6368]">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diğer Yorumlar */}
        <div className="p-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="w-full h-[48px] bg-[#f1f3f4] hover:bg-[#e8eaed] rounded-full text-[#3c4043] font-medium text-[15px] flex items-center justify-center gap-2"
          >
            {showAll ? "Yorumları gizle" : "Diğer kullanıcı yorumları"}
            <span className="text-lg">{showAll ? "⌃" : "⌄"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;