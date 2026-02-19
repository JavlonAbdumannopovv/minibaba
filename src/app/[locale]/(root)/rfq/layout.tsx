import React from "react";
import HomeHeader from "../_components/header";

export default function RFQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HomeHeader />
      <div className="mx-auto w-7xl max-w-7xl px-3">{children}</div>
    </div>
  );
}
