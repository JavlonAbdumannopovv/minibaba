"use client";

import Hero from "./_components/hero";
import RandomProductsCarousel from "./_components/random-products-carousel";
import VerifiedSellersCarousel from "./_components/sellers-carousel";
// import Sidebar from "./_components/sidebar";
import TopProductsCarousel from "./_components/top-products-carousel";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-12 gap-6">
        {/* <Sidebar /> */}
        <Hero />
      </div>
      <TopProductsCarousel />
      <VerifiedSellersCarousel />
      <RandomProductsCarousel />
    </div>
  );
};

export default HomePage;
