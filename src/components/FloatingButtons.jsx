// import React from "react";

// const FloatingButtons = () => {
//   return (
//     <>
//       {/* WhatsApp (Sağ altta) */}
//       <div className="fixed bottom-4 right-4 z-50 animate-bounce">
//         <a
//           href="https://wa.me/905357351042"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="/images/10.png"
//             alt="WhatsApp"
//             className="w-16 h-16 rounded-full shadow-lg"
//           />
//         </a>
//       </div>

//       {/* Telefon (Sol altta) */}
//       <div className="fixed bottom-4 left-4 z-50 animate-bounce ">
//         <a href="tel:+905357351042">
//           <img
//             src="/images/11.png"
//             alt="Ara"
//             className="w-16 h-16 rounded-full shadow-lg"
//           />
//         </a>
//       </div>
//     </>
//   );
// };

// export default FloatingButtons;

import React from "react";

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/905066685090"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce"
      >
        <img
          src="/images/10.png"
          alt="WhatsApp"
          className="w-16 h-16 rounded-full shadow-2xl"
        />
      </a>

      {/* Telefon */}
      <a
        href="tel:+905066685090"
        className="animate-bounce"
      >
        <img
          src="/images/11.png"
          alt="Ara"
          className="w-16 h-16 rounded-full shadow-2xl"
        />
      </a>

    </div>
  );
};

export default FloatingButtons;