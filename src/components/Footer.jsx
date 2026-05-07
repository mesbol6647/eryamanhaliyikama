// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         <div>
//           <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
//             Hizmetlerimiz
//           </h3>
//           <ul className="space-y-4 text-sm">
//             <li className="pb-3 border-b border-gray-700">🧼 Halı Yıkama</li>
//             <li className="pb-3 border-b border-gray-700">🛋️ Koltuk Yıkama</li>
//             <li className="pb-3 border-b border-gray-700">🛏️ Yatak Yıkama</li>
//             <li className="pb-3 border-b border-gray-700">🧺 Yorgan & Battaniye Yıkama</li>
//             <li className="pb-3 border-b border-gray-700">🪟 Stor Perde Yıkama</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
//             Ek Hizmetler
//           </h3>
//           <ul className="space-y-4 text-sm">
//             <li className="pb-3 border-b border-gray-700">🧵 Halı Tamiri</li>
//             <li className="pb-3 border-b border-gray-700">📏 Halı Overlok</li>
//             <li className="pb-3 border-b border-gray-700">🌿 Antibakteriyel Temizlik</li>
//             <li className="pb-3 border-b border-gray-700">🚚 Ücretsiz Servis</li>
//             <li className="pb-3 border-b border-gray-700">💧 Leke Çıkarma</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
//             İletişim
//           </h3>
//           <ul className="space-y-4 text-sm">
//             <li className="pb-3 border-b border-gray-700">📍 Eryaman/ Ankara</li>
//             <li className="pb-3 border-b border-gray-700">📞 +90 530 912 30 66</li>
//             {/* <li className="pb-3 border-b border-gray-700">📱 +90 212 693 69 21</li> */}
//             <li className="pb-3 border-b border-gray-700">📧 info@eryamanhaliyikama.com.tr</li>
//           </ul>
//           <div className="flex space-x-6 mt-6 justify-center">
//             <a href="#">
//               <img
//                 src="/images/7.png"
//                 alt="Facebook"
//                 className="h-11 w-11 hover:opacity-80"
//               />
//             </a>
//             <a href="#">
//               <img
//                 src="/images/8.png"
//                 alt="Instagram"
//                 className="h-11 w-11 hover:opacity-80"
//               />
//             </a>
//             <a href="#">
//               <img
//                 src="/images/10.png"
//                 alt="WhatsApp"
//                 className="h-12 w-12 hover:opacity-80"
//               />
//             </a>
//           </div>
//         </div>

        
//       </div>

//       <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
//         © 2022 Bold-Soft – Tüm Hakları Saklıdır.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Hizmetler */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
            Hizmetlerimiz
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="pb-3 border-b border-gray-700">
              🧼 Halı Yıkama
            </li>

            <li className="pb-3 border-b border-gray-700">
              🛋️ Koltuk Yıkama
            </li>

            <li className="pb-3 border-b border-gray-700">
              🛏️ Yatak Yıkama
            </li>

            <li className="pb-3 border-b border-gray-700">
              🧺 Yorgan & Battaniye Yıkama
            </li>

            <li className="pb-3 border-b border-gray-700">
              🪟 Stor Perde Yıkama
            </li>
          </ul>
        </div>

        {/* Ek Hizmetler */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
            Ek Hizmetler
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="pb-3 border-b border-gray-700">
              🧵 Halı Tamiri
            </li>

            <li className="pb-3 border-b border-gray-700">
              📏 Halı Overlok
            </li>

            <li className="pb-3 border-b border-gray-700">
              🌿 Antibakteriyel Temizlik
            </li>

            <li className="pb-3 border-b border-gray-700">
              🚚 Ücretsiz Servis
            </li>

            <li className="pb-3 border-b border-gray-700">
              💧 Leke Çıkarma
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
            İletişim
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="pb-3 border-b border-gray-700">
              📍 Eryaman / Ankara
            </li>

            <li className="pb-3 border-b border-gray-700">
              📞 +90 530 912 30 66
            </li>

            <li className="pb-3 border-b border-gray-700">
              📧 info@eryamanhaliyikama.com.tr
            </li>
          </ul>

          {/* Sosyal Medya */}
          <div className="flex space-x-6 mt-6 justify-center">
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/7.png"
                alt="Facebook"
                className="h-11 w-11 hover:opacity-80 transition duration-300"
              />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/8.png"
                alt="Instagram"
                className="h-11 w-11 hover:opacity-80 transition duration-300"
              />
            </a>

            <a
              href="https://wa.me/905309123066"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/10.png"
                alt="WhatsApp"
                className="h-12 w-12 hover:opacity-80 transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Yazı */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        © 2022 Bold-Soft – Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;