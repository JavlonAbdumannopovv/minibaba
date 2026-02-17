import React from "react";
import HomeHeader from "../(root)/_components/header";
import HomeFooter from "@/components/footers/home-footer";
import ChatSidebar from "./_components/sidebar";
import ChatHeader from "./_components/chatHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg h-screen">
      <HomeHeader />
      <div className="mx-auto h-[calc(100vh-70px)] max-w-7xl items-start justify-start md:flex md:px-3">
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}
