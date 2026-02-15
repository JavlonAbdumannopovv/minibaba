"use client";

import { useState } from "react";
import { 
  ChevronDown, ChevronUp, ChevronRight, Laptop, Factory, 
  Shirt, Home, Car, Heart, Trophy, Wrench, ShieldCheck 
} from "lucide-react";

const categories = [
  { id: "electronics", name: "Consumer Electronics", icon: <Laptop className="w-4 h-4" /> },
  { id: "machinery", name: "Industrial Machinery", icon: <Factory className="w-4 h-4" /> },
  { id: "apparel", name: "Apparel & Accessories", icon: <Shirt className="w-4 h-4" /> },
  { id: "home", name: "Home & Garden", icon: <Home className="w-4 h-4" /> },
  { id: "vehicles", name: "Vehicles & Parts", icon: <Car className="w-4 h-4" /> },
  { id: "beauty", name: "Beauty & Personal Care", icon: <Heart className="w-4 h-4" /> },
  { id: "sports", name: "Sports & Entertainment", icon: <Trophy className="w-4 h-4" /> },
  { id: "tools", name: "Tools & Hardware", icon: <Wrench className="w-4 h-4" /> },
];

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("electronics");

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

            <div className="px-6 flex justify-center items-center h-full text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] cursor-pointer">Ready to Ship</div>
            <div className="px-6 flex justify-center items-center h-full text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] cursor-pointer">Personal Protective Equipment</div>
            <div className="px-6 flex justify-center items-center h-full text-[14px] font-medium text-[#1C1C1C] hover:text-[#F47B25] cursor-pointer">Trade Assurance</div>
          </div>
        </div>


        <div 
          className={`absolute top-[49px]  left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[600px] border-t border-gray-100" : "max-h-0"
          }`}
        >
          <div className="max-w-7xl px-3 mx-auto flex min-h-[500px] bg-white">

            <div className="w-[280px] border-r border-gray-100 flex flex-col bg-white">
              <div className="flex-1 py-2 overflow-y-auto">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveTab(cat.id)}
                    className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${
                      activeTab === cat.id ? "bg-[#F47B251A] text-[#F47B25] font-bold border-[#F47B25] border-r-4" : "text-[#505050] hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-[14px]">
                      {cat.icon}
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


            <div className="flex-1 p-10 grid grid-cols-12 gap-8">
               <div className="col-span-8 grid grid-cols-2 gap-x-12">
                  <div>
                    <h3 className="font-bold text-[16px] text-[#1C1C1C] border-b-2 border-[#1C1C1C] inline-block pb-1 mb-8 uppercase">Laptops & Computers</h3>
                    <div className="space-y-8">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 bg-[#F4F4F4] rounded-lg flex items-center justify-center">💻</div>
                            <div>
                               <p className="text-[14px] font-bold group-hover:text-blue-600">Professional Laptops</p>
                               <p className="text-[12px] text-gray-400">1.2k+ Products</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="border-l border-gray-100 border-dashed pl-12">
                    <h3 className="font-bold text-[16px] text-[#1C1C1C] border-b-2 border-[#1C1C1C] inline-block pb-1 mb-8 uppercase">Mobile Electronics</h3>
                    <div className="space-y-8">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 bg-[#F4F4F4] rounded-lg flex items-center justify-center">📱</div>
                            <div>
                               <p className="text-[14px] font-bold group-hover:text-blue-600">Smartphones</p>
                               <p className="text-[12px] text-gray-400">5.6k+ Products</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>


               <div className="col-span-4 space-y-6">
                  <div className="bg-[#E5F1FF] p-6 rounded-xl border border-blue-100">
                    <span className="bg-[#00D1FF] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">Hot Deal</span>
                    <h4 className="mt-4 font-bold text-[18px]">Next-Gen Audio Technology</h4>
                    <p className="text-[12px] text-gray-500 mt-2 mb-6">30% Bulk Discount from factories.</p>
                    <button className="bg-[#1C1C1C] text-white text-[13px] px-6 py-2 rounded-lg font-bold">Source Now</button>
                  </div>
                  <div className="bg-[#212121] p-6 rounded-xl text-white">
                    <h4 className="font-bold text-[16px] mb-4 text-blue-400">Verified Suppliers</h4>
                    <div className="space-y-3 text-[13px]">
                       <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Factory Inspected</div>
                       <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Fast Shipping</div>
                    </div>
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