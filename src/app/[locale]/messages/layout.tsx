import React from "react";
import HomeHeader from "../(root)/_components/header";
import HomeFooter from "@/components/footers/home-footer";
import ChatSidebar from "./_components/sidebar";
import ChatHeader from "./_components/chatHeader";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen bg-bg">
            <HomeHeader />
            <div className="md:flex max-w-7xl  h-[calc(100vh-70px)]  mx-auto md:px-3 justify-start items-start">
          
                <div className="w-full h-full">

                    {children}
                </div>
            </div>

        </div>
    );
}