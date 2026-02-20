import React from "react";
import HomeHeader from "../_components/header";
import HomeFooter from "@/components/footers/home-footer";

export default function RFQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HomeHeader />
      <div className="mx-auto max-w-7xl  px-3">{children}</div>
      <HomeFooter/>
    </div>
  );
}
