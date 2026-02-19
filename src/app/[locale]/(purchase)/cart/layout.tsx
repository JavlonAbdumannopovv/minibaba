import type { ReactNode } from "react";
import HomeFooter from "@/components/footers/home-footer";
import HomeHeader from "../../(root)/_components/header";

function CartLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg text-text min-h-dvh">
      <HomeHeader />
      <main className="mx-auto w-full max-w-7xl p-4 pb-20">{children}</main>
      <HomeFooter />
    </div>
  );
}

export default CartLayout;
