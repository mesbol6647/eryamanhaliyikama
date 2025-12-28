// components/QuickContactBox.jsx
import React from "react";

const QuickContactBox = () => {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md">
      <h4 className="text-green-700 font-bold mb-2">Hızlı İletişim</h4>
      <p className="text-sm text-gray-700 mb-3">
        Hemen arayın ya da WhatsApp üzerinden bize ulaşın. Sipariş vermek hiç bu kadar kolay olmamıştı!
      </p>
      <a
        href="tel:05309123066"
        className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-2"
      >
        Telefonla Ara
      </a>
      <a
        href="https://wa.me/905309123066"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        WhatsApp
      </a>
    </div>
  );
};

export default QuickContactBox;