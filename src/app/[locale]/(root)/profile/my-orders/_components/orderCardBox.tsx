import React from "react";
import { Truck, MoreHorizontal } from "lucide-react";

const OrderCardBox = () => {
  const items = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop",
      qty: 1,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1634316427425-722247ebe036?q=80&w=1332&auto=format&fit=crop",
      qty: 2,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1634316427425-722247ebe036?q=80&w=1332&auto=format&fit=crop",
      qty: 1,
    },
  ];

  return (
    <div className="mx-auto mt-[24px] w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-50 bg-[#FFF9F5] px-4 py-4 sm:flex-row sm:items-center sm:gap-0 md:px-6">
        <div className="flex gap-4 md:gap-8">
          <div>
            <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              Buyurtma ID
            </p>
            <p className="text-base font-bold text-slate-900 md:text-lg">#MNB-772910</p>
          </div>
          <div className="border-l border-gray-200 pl-4 md:pl-8">
            <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Sana</p>
            <p className="text-base font-medium whitespace-nowrap text-slate-700 md:text-lg">
              12-May, 2024
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-4 sm:w-auto">
          <div className="flex items-center gap-1.5 rounded-full bg-[#FFEDE0] px-3 py-1 text-xs font-bold text-[#FF8A33]">
            <span className="h-2 w-2 rounded-full bg-[#FF8A33]"></span>
            Yetkazilmoqda
          </div>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 p-4 md:p-6 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 md:h-16 md:w-16"
            >
              <img src={item.img} alt="product" className="h-full w-full object-cover" />
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-bl-lg bg-[#1A253C] text-[10px] font-bold text-white">
                {item.qty}
              </span>
            </div>
          ))}

          <div className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-dashed border-blue-50 text-xs font-medium text-blue-300 md:h-16 md:w-16 md:text-sm">
            +2 ta
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center md:gap-8 lg:justify-end">
          <div className="text-left lg:text-right">
            <p className="mb-1 text-sm text-slate-400">Umumiy qiymat</p>
            <p className="text-xl font-bold tracking-tight whitespace-nowrap text-slate-900 md:text-2xl">
              3,450,000 UZ$
            </p>
          </div>

          <div className="flex w-full flex-row gap-2 sm:w-[160px] sm:flex-col">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#FF8A33] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#e67a29] md:text-base">
              <Truck className="h-4 w-4 fill-white/20 md:h-5 md:w-5" />
              Kuzatish
            </button>
            <button className="flex-1 rounded-lg border border-[#FF8A33]/20 bg-white px-4 py-2.5 text-sm font-bold text-[#FF8A33] transition-all hover:border-[#FF8A33] md:text-base">
              Tafsilotlar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCardBox;
