"use client";

import Hero from "./_components/hero";
import Sidebar from "./_components/sidebar";
import TopProductsCarousel from "./_components/top-products-carousel";

const HomePage = () => {
  return (
    <div className="">
      <div className="mb-10 grid grid-cols-12 gap-6">
        <Sidebar />
        <Hero />
      </div>
      <TopProductsCarousel />
    </div>
  );
};

export default HomePage;
