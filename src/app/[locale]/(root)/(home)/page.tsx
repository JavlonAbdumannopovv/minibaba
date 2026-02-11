"use client";

import Hero from "./_components/hero";
import Sidebar from "./_components/sidebar";

const HomePage = () => {
  return (
    <div className="">
      <div className="mb-10 grid grid-cols-12 gap-6">
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
