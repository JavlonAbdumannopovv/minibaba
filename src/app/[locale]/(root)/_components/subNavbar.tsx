"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { categories } from "@/constants";

import { Category } from "@/types";

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(categories[0].id);
  const [activeCat, setActiveCat] = useState<Category>();

  useEffect(() => {
    const categorie = categories.find((cat) => cat.id == activeTab);
    setActiveCat(categorie);
  }, [activeTab]);
  return (
    <>
      <div className="relative top-0 z-35 flex items-center justify-center border-b border-gray-200 bg-white">
        <div className="flex h-[49px] w-full max-w-7xl items-center justify-between px-3">
          <div className="flex h-full justify-start">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-full w-[180px] cursor-pointer items-center justify-center gap-2 bg-[#F47B25] font-semibold text-white transition-colors"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="h-[2px] w-4 bg-white"></span>
                <span className="h-[2px] w-4 bg-white"></span>
                <span className="h-[2px] w-4 bg-white"></span>
              </div>
              Categories
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </div>

            <div className="hidden h-full cursor-pointer items-center justify-center px-6 text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] md:flex">
              Ready to Ship
            </div>
            <div className="hidden h-full cursor-pointer items-center justify-center px-6 text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] md:flex">
              Personal Protective Equipment
            </div>
            <div className="hidden h-full cursor-pointer items-center justify-center px-6 text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] md:flex">
              Trade Assurance
            </div>
          </div>
        </div>

        {/* modal */}
        <div
          className={`absolute top-[49px] left-0 w-full overflow-hidden bg-white shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[600px] border-t border-gray-100" : "max-h-0"
          }`}
        >
          <div className="mx-auto flex min-h-[500px] max-w-7xl bg-white px-3">
            {/* chap */}
            <div className="flex w-[280px] flex-col border-r border-gray-100 bg-white">
              <div className="flex-1 overflow-y-auto py-2">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex cursor-pointer items-center justify-between px-6 py-3 transition-colors ${
                      activeTab === cat.id
                        ? "border-r-4 border-[#F47B25] bg-[#F47B251A] font-bold text-[#F47B25]"
                        : "text-[#505050] hover:bg-gray-50"
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

              <div className="border-t border-blue-50 bg-[#F7FAFC] p-6">
                <p className="mb-4 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                  Quick Links
                </p>
                <ul className="space-y-3 text-[14px] font-medium text-[#505050]">
                  <li className="cursor-pointer hover:text-blue-600">Top Sellers</li>
                  <li className="cursor-pointer hover:text-blue-600">New Arrivals</li>
                  <li className="cursor-pointer hover:text-blue-600">Sale Event</li>
                </ul>
              </div>
            </div>

            {/* O'ng taraf */}
            <div className="flex-1 bg-white p-8">
              {/* Sarlavha qismi */}
              <div className="mb-4">
                <h2 className="text-[36px] font-bold text-[#111827]">{activeCat?.name}</h2>
                <p className="mt-2 text-[#6B7280]">
                  Ushbu bo'limda siz ulgurji narxlarda eng so'nggi texnologik uskunalarni
                  topishingiz mumkin.
                </p>
              </div>
              {/* Bu yerda misol tariqasida faqat bitta blok (Elektronika ichidagi sub-bloklar) keltirilgan */}
              <div className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#111827]">
                    {activeCat?.name} {/* Masalan: Smartfonlar va gadjetlar */}
                  </h3>
                  <button className="font-medium text-[#FF7010] hover:underline">Hammasi</button>
                </div>

                <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
                  {activeCat?.subCategories.map((sub, index) => (
                    <div
                      key={index}
                      className="group flex min-w-[120px] cursor-pointer flex-col items-center"
                    >
                      {/* Rasm konteyneri */}
                      <div className="flex h-[120px] w-[120px] items-center justify-center rounded-xl border border-gray-100 bg-white p-2 shadow-sm transition-shadow group-hover:shadow-md">
                        <img
                          src={sub.image}
                          alt={sub.name}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </div>
                      {/* Sub-category nomi */}
                      <div className="mt-3 px-1 text-center text-[14px] leading-tight font-medium text-[#374151]">
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
          className="fixed inset-0 z-30 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SubNavbar;
