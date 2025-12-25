


import * as React from 'react';


function DashboardBlog() {
  

  return (
    <>
      <section className="relative w-full">
        {/* === PC Görseli ve Arama Kutusu === */}
        <div className="hidden md:block bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pcbanner5.png')",
            height: "750px",
            width: "100%",
          }}>
       
        </div>

        {/* === Mobil Görsel ve Arama Kutusu === */}
        <div className="block md:hidden relative h-[400px] bg-cover bg-center bg-no-repeat mt-20 "
       style={{ backgroundImage: "url('/images/mobilehalibanner.png')" }}>
  </div>
      </section>      
    </>
  );
}

export default DashboardBlog;
