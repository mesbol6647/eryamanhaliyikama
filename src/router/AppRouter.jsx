import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop"; // ✅ EKLENDİ

import Dashboard from "../pages/Dashboard";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Bolgeler from "../pages/Bolgeler";
import AboutPage from "../pages/AboutPage";
import FaqPage from "../pages/FaqPage";
import ServicePage from "../pages/ServicePage";
import RegionDetail from "../pages/RegionDetail";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ ROUTE DEĞİŞİNCE EN ÜSTE ATAR */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/bolgeler" element={<Bolgeler />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmet/:slug" element={<ServicePage />} />
        <Route path="/bolge/:slug" element={<RegionDetail />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
