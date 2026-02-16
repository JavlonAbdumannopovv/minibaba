"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown, ChevronUp, ChevronRight, Laptop, Factory,
  Shirt, Home, Car, Heart, Trophy, Wrench, ShieldCheck
} from "lucide-react";
import { categories} from "@/constants";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { number } from "zod";
import { Category } from "@/types";




const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(categories[0].id);
  const [activeCat, setActiveCat] = useState<Category>()

  useEffect(()=>{
    const categorie = categories.find(cat=>cat.id==activeTab)
    setActiveCat(categorie)
  }, [activeTab])
  return (
    <>

      <div className="relative z-35 flex justify-center items-center  top-0 border-b border-gray-200 bg-white">
        <div className="max-w-7xl w-full h-[49px] px-3 flex justify-between items-center">
          <div className="flex justify-start h-full">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-[180px] cursor-pointer bg-[#F47B25] text-white flex justify-center items-center h-full font-semibold gap-2 transition-colors"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="w-4 h-[2px] bg-white"></span>
                <span className="w-4 h-[2px] bg-white"></span>
                <span className="w-4 h-[2px] bg-white"></span>
              </div>
              Categories
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>

            <div className="px-6  hidden md:flex  justify-center items-center h-full text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] cursor-pointer">Ready to Ship</div>
            <div className="px-6  hidden md:flex  justify-center items-center h-full text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] cursor-pointer">Personal Protective Equipment</div>
            <div className="px-6  hidden md:flex  justify-center items-center h-full text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] cursor-pointer">Trade Assurance</div>
          </div>
        </div>


        {/* modal */}
        <div
          className={`absolute top-[49px]  left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[600px] border-t border-gray-100" : "max-h-0"
            }`}
        >
          <div className="max-w-7xl px-3 mx-auto flex min-h-[500px] bg-white">
            {/* chap */}
            <div className="w-[280px] border-r border-gray-100 flex flex-col bg-white">
              <div className="flex-1 py-2 overflow-y-auto">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${activeTab === cat.id ? "bg-[#F47B251A] text-[#F47B25] font-bold border-[#F47B25] border-r-4" : "text-[#505050] hover:bg-gray-50"
                      }`}
                  >
                    <div className="flex items-center gap-3 text-[14px]">
                      <span
                        className={[
                          "material-symbols-outlined text-text-muted transition-colors",
                          "group-hover:text-primary",
                        ].join(" ")}
                      >
                        {cat.icon}
                      </span>
                      {cat.name}
                    </div>

                  </div>
                ))}
              </div>


              <div className="p-6 border-t border-blue-50 bg-[#F7FAFC]">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Links</p>
                <ul className="space-y-3 text-[14px] font-medium text-[#505050]">
                  <li className="hover:text-blue-600 cursor-pointer">Top Sellers</li>
                  <li className="hover:text-blue-600 cursor-pointer">New Arrivals</li>
                  <li className="hover:text-blue-600 cursor-pointer">Sale Event</li>
                </ul>
              </div>
            </div>


            {/* O'ng taraf */}
            <div className="flex-1 p-8 bg-white">
              {/* Sarlavha qismi */}
              <div className="mb-4">
                <h2 className="text-[36px] font-bold text-[#111827]">
                  {activeCat?.name}
                </h2>
                <p className="text-[#6B7280] mt-2">
                  Ushbu bo'limda siz ulgurji narxlarda eng so'nggi texnologik uskunalarni topishingiz mumkin.
                </p>
              </div>
                {/* Bu yerda misol tariqasida faqat bitta blok (Elektronika ichidagi sub-bloklar) keltirilgan */}
                <div className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[#111827]">
                      {activeCat?.name} {/* Masalan: Smartfonlar va gadjetlar */}
                    </h3>
                    <button className="text-[#FF7010] font-medium hover:underline">
                      Hammasi
                    </button>
                  </div>

                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {activeCat?.subCategories.map((sub, index) => (
                      <div key={index} className="flex flex-col items-center min-w-[120px] group cursor-pointer">
                        {/* Rasm konteyneri */}
                        <div className="w-[120px] h-[120px] bg-white rounded-xl border border-gray-100 p-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <img
                            src={sub.image}
                            alt={sub.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        {/* Sub-category nomi */}
                        <div className="mt-3 text-center text-[14px] text-[#374151] font-medium leading-tight px-1">
                          {sub.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
          
            </div>
          </div>
        </div>
      </div>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SubNavbar;