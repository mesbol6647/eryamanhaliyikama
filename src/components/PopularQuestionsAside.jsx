// components/PopularQuestionsAside.jsx
import React from "react";
import { Link } from "react-router-dom";

const questions = [
  "Halılar kaç günde kurur?",
  "Koltuk yıkamada hangi deterjanlar kullanılır?",
  "Halılar nasıl paketleniyor?",
  "Yatak yıkama hizmetiniz var mı?",
  "Stor perde yıkama nasıl yapılır?",
];

const PopularQuestionsAside = () => {
  return (
    <div>
      <h4 className="text-lg font-bold mb-4 text-green-700">Popüler Sorular</h4>
      <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
        {questions.map((q, i) => (
          <li key={i}>
            <Link to="/faq" className="hover:underline">
              {q}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularQuestionsAside;