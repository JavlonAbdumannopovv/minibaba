import React from 'react';
import { Truck, MoreHorizontal } from 'lucide-react';

const OrderCardBox = () => {
  const items = [
    { id: 1, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop', qty: 1 },
    { id: 2, img: 'https://images.unsplash.com/photo-1634316427425-722247ebe036?q=80&w=1332&auto=format&fit=crop', qty: 2 },
    { id: 3, img: 'https://images.unsplash.com/photo-1634316427425-722247ebe036?q=80&w=1332&auto=format&fit=crop', qty: 1 },
  ];

  return (
    <div className="mt-[24px] border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white mx-auto w-full ">
      
      <div className="bg-[#FFF9F5] px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-50 gap-4 sm:gap-0">
        <div className="flex gap-4 md:gap-8">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Buyurtma ID</p>
            <p className="text-slate-900 font-bold text-base md:text-lg">#MNB-772910</p>
          </div>
          <div className="border-l border-gray-200 pl-4 md:pl-8">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sana</p>
            <p className="text-slate-700 font-medium text-base md:text-lg whitespace-nowrap">12-May, 2024</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          <div className="bg-[#FFEDE0] text-[#FF8A33] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#FF8A33] rounded-full"></span>
            Yetkazilmoqda
          </div>
          <button className="text-gray-400 hover:text-gray-600 p-1">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        

        <div className="flex flex-wrap items-center gap-3">
          {items.map((item) => (
            <div key={item.id} className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
              <img 
                src={item.img} 
                alt="product" 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-0 right-0 bg-[#1A253C] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-bl-lg">
                {item.qty}
              </span>
            </div>
          ))}
          
          <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-dashed border-blue-50 rounded-lg flex items-center justify-center text-blue-300 font-medium text-xs md:text-sm">
            +2 ta
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-6 md:gap-8">
          <div className="text-left lg:text-right">
            <p className="text-slate-400 text-sm mb-1">Umumiy qiymat</p>
            <p className="text-slate-900 text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">3,450,000 UZ$</p>
          </div>

          <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-[160px]">
            <button className="flex-1 bg-[#FF8A33] hover:bg-[#e67a29] text-white py-2.5 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors text-sm md:text-base">
              <Truck className="w-4 h-4 md:w-5 md:h-5 fill-white/20" />
              Kuzatish
            </button>
            <button className="flex-1 bg-white border border-[#FF8A33]/20 hover:border-[#FF8A33] text-[#FF8A33] py-2.5 px-4 rounded-lg font-bold transition-all text-sm md:text-base">
              Tafsilotlar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCardBox;