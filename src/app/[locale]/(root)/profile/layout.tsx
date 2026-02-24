"use client";
import { User, ShoppingBag, Heart, MapPin, CreditCard, LogOut, Edit2 } from "lucide-react";
import React from "react";
import HomeHeader from "../_components/header";
import HomeFooter from "@/components/footers/home-footer";
import { usePathname } from "next/navigation";
import SidebarItem from "./_components/sidebar.item";
const sidebarData = [
    { icon: User, label: "Profil", active: true, path: "/me" },
    { icon: ShoppingBag, label: "Buyurtmalarim", path: "/profile/my-orders" },
    { icon: Heart, label: "Sevimli mahsulotlar", path: "/profile/favourites" },
    { icon: MapPin, label: "Manzillarim", path: "/my-address" },
]

const AccountPage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const lastone = pathname.split("/").reverse()[0];
  console.log(lastone);
  if (lastone == "me" || lastone == "profile") {
    return (
      <>
        <HomeHeader />
        <div className="mx-auto min-h-screen max-w-7xl bg-[#F8F9FA] px-3 py-4 font-sans md:py-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-3">
              <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="relative mb-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-gray-200 shadow-sm">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="User"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button className="absolute right-0 bottom-0 rounded-full border-2 border-white bg-orange-500 p-1.5 text-white shadow-sm">
                    <Edit2 size={14} />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Alisher Usmonov</h2>
                <p className="text-sm text-gray-400">+998 90 123 45 67</p>
                <span className="mt-2 rounded-md bg-green-100 px-3 py-1 text-[10px] font-bold text-green-600 uppercase">
                  Tasdiqlangan
                </span>

                <nav className="mt-8 w-full space-y-1">
                  {sidebarData.map((item, idx) => (
                    <SidebarItem item={item} key={idx} />
                  ))}
                  <button className="mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition-all hover:bg-red-50">
                    <LogOut size={20} />
                    <span>Chiqish</span>
                  </button>
                </nav>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-9">{children}</div>
          </div>
        </div>
        <HomeFooter />
      </>
    );
  } else {
    return (
      <div>
        <HomeHeader />
        {children}
        <HomeFooter />
      </div>
    );
  }
};

export default AccountPage;
1;
