import React from "react";
import HomeHeader from "../_components/header";
import HomeFooter from "@/components/footers/home-footer";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div>
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
};

export default layout;
