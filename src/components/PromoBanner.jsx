// components/PromoBanner.jsx
import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400 shadow">
      <h4 className="font-bold text-yellow-700 mb-1">🎉 Mevsimlik Kampanya!</h4>
      <p className="text-sm text-gray-800">
        Eryaman'da halı ve koltuk yıkamada %15 indirim. Kampanya 31 Mayıs’a kadar geçerlidir.
      </p>
    </div>
  );
};

export default PromoBanner;