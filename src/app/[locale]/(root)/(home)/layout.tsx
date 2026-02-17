import type { ReactNode } from "react";
import HomeHeader from "../_components/header";
import HomeFooter from "@/components/footers/home-footer";
import SubNavbar from "../_components/subNavbar";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg text-text min-h-dvh">
      <HomeHeader />
      <SubNavbar />
      <main className="mx-auto w-full max-w-7xl p-4 pb-20">{children}</main>
      <HomeFooter />
    </div>
  );
}

export default HomeLayout;
