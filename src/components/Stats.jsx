import React from 'react';

const Stats = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
       
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla binlerce evin halılarını güvenle temizledik.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-blue-600">25.000+</p>
            <p className="mt-2 text-gray-600">Yıkanan Ürün</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-blue-600">4.9/5</p>
            <p className="mt-2 text-gray-600">Müşteri Memnuniyeti</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-blue-600">10+</p>
            <p className="mt-2 text-gray-600">Hizmet Verilen Semt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
