import { ReactNode } from "react";
import HomeHeader from "../(root)/_components/header";
import HomeFooter from "@/components/footers/home-footer";

interface Props {
  children: ReactNode;
}

const CheckoutLayout = ({ children }: Props) => {
  return (
    <div>
      <HomeHeader />
      <main className="mx-auto w-full max-w-7xl p-4 pb-20">{children}</main>
      <HomeFooter />
    </div>
  );
};

export default CheckoutLayout;
