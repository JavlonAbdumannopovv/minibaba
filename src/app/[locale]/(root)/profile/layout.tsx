"use client";
import {
    User,
    ShoppingBag,
    Heart,
    MapPin,
    CreditCard,
    LogOut,
    Edit2,

} from 'lucide-react';
import React from 'react';
import HomeHeader from '../_components/header';
import HomeFooter from '@/components/footers/home-footer';
import { usePathname } from "next/navigation"
import SidebarItem from './_components/sidebar.item';
const sidebarData = [
    { icon: User, label: "Profil", active: true, path: "/me" },
    { icon: ShoppingBag, label: "Buyurtmalarim", path: "/profile/my-orders" },
    { icon: Heart, label: "Sevimli mahsulotlar", path: "/profile/favourites" },
    { icon: MapPin, label: "Manzillarim", path: "/my-address" },
    { icon: CreditCard, label: "To'lovlarim", path: "/profile/checkout" },
]

const AccountPage = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const lastone = pathname.split("/").reverse()[0]
    console.log(lastone)
    if (lastone == "me" || lastone == "profile") {
        return (
            <>
                <HomeHeader />
                <div className="min-h-screen max-w-7xl mx-auto   bg-[#F8F9FA] px-3 md:py-8 py-4 font-sans">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                        <div className="lg:col-span-3 space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <button className="absolute bottom-0 right-0 bg-orange-500 p-1.5 rounded-full text-white border-2 border-white shadow-sm">
                                        <Edit2 size={14} />
                                    </button>
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">Alisher Usmonov</h2>
                                <p className="text-gray-400 text-sm">+998 90 123 45 67</p>
                                <span className="mt-2 px-3 py-1 bg-green-100 text-green-600 text-[10px] font-bold uppercase rounded-md">
                                    Tasdiqlangan
                                </span>

                                <nav className="w-full mt-8 space-y-1">
                                    {sidebarData.map((item, idx) => (
                                        <SidebarItem item={item} key={idx} />
                                    ))}
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 mt-4 transition-all">
                                        <LogOut size={20} />
                                        <span>Chiqish</span>
                                    </button>
                                </nav>
                            </div>
                        </div>

                        <div className="lg:col-span-9  space-y-6">
                            {children}
                        </div>
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
                <HomeFooter/>
            </div>
        )
    }

};

export default AccountPage; 1