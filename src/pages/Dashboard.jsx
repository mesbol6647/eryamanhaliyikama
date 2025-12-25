





import * as React from "react";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import BlogPosts from "../components/BlogPosts";
import Stats from "../components/Stats";

function Dashboard() {
  
  return (
    <>
    <div className="relative w-full">
  {/* Masaüstü Banner */}
  <div className="hidden md:block w-full h-[750px]">
    <img
      src="/images/pcbanner5.png"
      alt="PC Banner"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Mobil Banner */}
  <div className="block md:hidden w-full h-[450px]">
    <img
      // src="/images/mobilehalibanner.png"
      src="/images/mobilbanner7.png"
      alt="Mobil Banner"
      className="w-full h-[500px] object-cover"
    />
  </div>
</div>


{/* ALT KISIM BURADA, YUKARI KAYMAMASI İÇİN BOŞLUK VERİLDİ */}
<div className="relative z-10 ">
{/* <div className="relative z-10 mt-[750px] md:mt-[400px] lg:mt-[750px]"> */}
  <Section1 />
  <Testimonials />
  <BlogPosts />
  <Stats />
  <Footer />
</div>

    </>
  );
}

export default Dashboard;
