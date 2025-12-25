import React from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ahmet Yılmaz",
      comment: "Halı yıkama hizmetinden çok memnun kaldım. Halılarım tertemiz geldi, teşekkür ederim.",
      rating: 5,
    },
    {
      name: "Merve Kaya",
      comment: "Koltuk yıkama işlemi sonrası adeta yeni gibi oldu. Ekip çok özenliydi.",
      rating: 5,
    },
    {
      name: "Seda Demir",
      comment: "Stor perde yıkama hizmeti hızlı ve hijyenikti. Gözüm kapalı tekrar tercih ederim.",
      rating: 4,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Müşteri Yorumları
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <p className="text-sm text-yellow-500">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}

          <div className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-center items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
            <Link
              to="/yorum"
              className="w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded"
            >
              Tüm Yorumları Gör
            </Link>
            <Link
              to="/yorum-ekle"
              className="w-full text-center bg-red-600 hover:bg-gray-200 text-white font-bold py-3 px-6 rounded"
            >
              Yorum Ekle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
