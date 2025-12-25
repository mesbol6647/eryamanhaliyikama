// components/MiniBlogPosts.jsx
import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { title: "Evde Koltuk Temizliği Neden Yetersiz?", slug: "evde-koltuk-temizligi" },
  { title: "Shaggy Halılar Nasıl Yıkanır?", slug: "shaggy-hali-nasil-yikanir" },
];

const MiniBlogPosts = () => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow">
      <h4 className="text-green-700 font-bold text-lg mb-2">Faydalı Yazılar</h4>
      <ul className="text-sm space-y-2 text-gray-800">
        {posts.map((p, i) => (
          <li key={i}>
            <Link to={`/blog/`} className="hover:underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiniBlogPosts;
