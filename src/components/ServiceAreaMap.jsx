// components/ServiceAreaMap.jsx
import React from "react";

const ServiceAreaMap = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="text-green-700 font-bold text-lg mb-2">Hizmet Bölgemiz</h4>
      <img
        src="/images/kucukcekmece-map.png"
        alt="Eryaman Hizmet Haritası"
        className="w-full h-auto rounded"
      />
      <p className="text-sm text-gray-600 mt-2">
        Tüm Eryaman genelinde kapıdan teslim hizmeti veriyoruz. Haritada işaretli mahalleler servis alanımızdadır.
      </p>
    </div>
  );
};

export default ServiceAreaMap;