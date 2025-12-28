


import * as React from 'react';


function DashboardBlog() {
  

  return (
    <>
      <section className="relative w-full">
        {/* === PC Görseli ve Arama Kutusu === */}
        <div className="hidden md:block bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pcbanner6.png')",
            height: "850px",
            width: "100%",
          }}>
       
        </div>

        {/* === Mobil Görsel ve Arama Kutusu === */}
        <div className="block md:hidden w-full">
  <img
    src="/images/mobilbanner8.webp"
    alt="Mobil Banner"
    className="w-full h-auto "
  />
</div>
      </section>      
    </>
  );
}

export default DashboardBlog;
