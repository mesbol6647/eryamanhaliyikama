
// import React from "react";
// import { useParams } from "react-router-dom";
// import blogDataTr from "../data/blog-post.json";
// import Footer from "../components/Footer";
// import DashboardBlog from "./DashboardBlog";

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const blogData = blogDataTr["blog-post"]; // veya blogDataTr['blog-post']

//   const post = blogData.find((p) => p.slug === slug);

//   if (!post) {
//     return (
//       <div className="text-center text-red-500 py-20">
//         Blog bulunamadı
//       </div>
//     );
//   }

//   return (
//     <>
//       <DashboardBlog />
//       <div className="max-w-screen-md mx-auto py-12 px-4">
//         <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

//         {post.sections.map((section, index) => (
//           <div key={index} className="mb-10">
//             {section.heading && (
//               <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
//             )}

//             {section.paragraphs && (
//               <div className="space-y-4 text-gray-800 leading-relaxed">
//                 {section.paragraphs.map((para, idx) => (
//                   <p key={idx}>{para}</p>
//                 ))}
//               </div>
//             )}

//             {section.bulletPoints && (
//               <ul className="list-disc list-inside space-y-2 text-gray-800 mt-4">
//                 {section.bulletPoints.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BlogDetail;


import React from "react";
import { useParams } from "react-router-dom";
import blogDataTr from "../data/blog-post.json";
import Footer from "../components/Footer";
import DashboardBlog from "./DashboardBlog";
import ServiceCards from "../components/ServiceCards";
import QuickContactBox from "../components/QuickContactBox";
import PromoBanner from "../components/PromoBanner";
import PopularQuestionsAside from "../components/PopularQuestionsAside";
import CountdownPromo from "../components/CountdownPromo";
import MiniBlogPosts from "../components/MiniBlogPosts";
import ServiceAreaMap from "../components/ServiceAreaMap";
import TestimonialsBox from "../components/TestimonialsBox";

const BlogDetail = () => {
  const { slug } = useParams();
  const blogData = blogDataTr["blog-post"];
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 py-20">
        Blog bulunamadı
      </div>
    );
  }

  return (
    <>
      <DashboardBlog />
      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sol Yan: Hizmetler + Popüler Sorular */}
        <aside className="space-y-6">
          <ServiceCards />
          <PopularQuestionsAside />
          <MiniBlogPosts />
          <ServiceAreaMap />
        </aside>

        {/* Ana İçerik */}
        <main className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6 text-black">{post.title}</h1>

          {post.sections.map((section, index) => (
            <div key={index} className="mb-10">
              {section.heading && (
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs && (
                <div className="space-y-4 text-gray-800 leading-relaxed">
                  {section.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}

              {section.bulletPoints && (
                <ul className="list-disc list-inside space-y-2 text-gray-800 mt-4">
                  {section.bulletPoints.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </main>

        {/* Sağ Yan: İletişim ve Kampanya */}
        <aside className="space-y-6">
          <QuickContactBox />
          <PromoBanner />
          <CountdownPromo />
          <TestimonialsBox />
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
