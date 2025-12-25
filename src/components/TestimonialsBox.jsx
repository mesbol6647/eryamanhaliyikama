


// import React from "react";
// import { FaStar } from "react-icons/fa";

// const TestimonialsBox = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Ayşe K.",
//       comment: "Halılarım tertemiz oldu, kesinlikle tavsiye ederim!",
//       rating: 5,
//       date: "2 gün önce",
//       location: "Küçükçekmece"
//     },
//     {
//       id: 2,
//       name: "Mehmet T.",
//       comment: "Hızlı teslimat ve kaliteli hizmet için teşekkürler.",
//       rating: 4,
//       date: "1 hafta önce",
//       location: "Halkalı"
//     },
//     {
//       id: 3,
//       name: "Zeynep A.",
//       comment: "Stor perdelerim bembeyaz oldu, aynı gün teslim ettiler!",
//       rating: 5,
//       date: "3 gün önce",
//       location: "Sefaköy"
//     },
//     {
//       id: 4,
//       name: "Hakan Y.",
//       comment: "Koltuklarım ilk günkü gibi oldu, fiyat/performans mükemmel.",
//       rating: 4,
//       date: "5 gün önce",
//       location: "Avcılar"
//     },
//     {
//       id: 5,
//       name: "Fatma Ş.",
//       comment: "Kapıdan alıp teslim ettiler, çok memnun kaldım.",
//       rating: 5,
//       date: "1 gün önce",
//       location: "Bahçeşehir"
//     }
//   ];

//   return (
//     <aside className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//       <h3 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">
//         Müşteri Yorumları
//       </h3>
      
//       <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//         {testimonials.map((item) => (
//           <div key={item.id} className="text-sm pb-3 border-b border-gray-100 last:border-0">
//             <div className="flex justify-between items-center mb-1">
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar 
//                     key={i}
//                     className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
//                     size={12}
//                   />
//                 ))}
//               </div>
//               <span className="text-xs text-gray-500">{item.date}</span>
//             </div>
//             <p className="text-gray-700 italic mb-1">"{item.comment}"</p>
//             <div className="flex justify-between items-center">
//               <p className="font-medium text-gray-900">{item.name}</p>
//               <span className="text-xs text-gray-500">{item.location}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="mt-3 w-full py-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-md text-sm font-medium transition">
//         Tüm Yorumları Gör ({testimonials.length})
//       </button>
//     </aside>
//   );
// };

// export default TestimonialsBox;

import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TestimonialsBox = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ayşe K.",
      comment: "Halılarım tertemiz geldi, paketleme çok iyiydi. Emeğinize sağlık!",
      rating: 5,
      date: "2 gün önce",
      location: "Eryaman 3. Etap",
    },
    {
      id: 2,
      name: "Mehmet T.",
      comment: "Randevu saatine tam geldiler, hızlı teslimat oldu. Tavsiye ederim.",
      rating: 5,
      date: "1 hafta önce",
      location: "Göksu",
    },
    {
      id: 3,
      name: "Zeynep A.",
      comment: "Stor perdelerim bembeyaz oldu, koku da yok. Çok memnun kaldım.",
      rating: 5,
      date: "3 gün önce",
      location: "Güzelkent",
    },
    {
      id: 4,
      name: "Hakan Y.",
      comment: "Koltuk yıkama sonrası kuruma süresi beklediğimden kısa sürdü, sonuç harika.",
      rating: 4,
      date: "5 gün önce",
      location: "Eryaman 5. Etap",
    },
    {
      id: 5,
      name: "Fatma Ş.",
      comment: "Kapıdan alıp teslim ettiler, iletişim çok iyiydi. Teşekkürler.",
      rating: 5,
      date: "1 gün önce",
      location: "Bağlıca",
    },
  ];

  return (
    <aside className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">
        Müşteri Yorumları
      </h3>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="text-sm pb-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    } mr-1`}
                    size={12}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>

            <p className="text-gray-700 italic mb-1">"{item.comment}"</p>

            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-900">{item.name}</p>
              <span className="text-xs text-gray-500">{item.location}</span>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/yorumlar"
        className="mt-3 block text-center w-full py-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-md text-sm font-medium transition"
      >
        Tüm Yorumları Gör ({testimonials.length})
      </Link>
    </aside>
  );
};

export default TestimonialsBox;
