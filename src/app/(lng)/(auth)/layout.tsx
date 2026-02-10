import { ChildProps } from "@/types";
import HeaderAuth from "./_components/header-auth";
import FooterAuth from "./_components/footer-auth";

const AuthLayout = ({ children }: any) => {
  return (
    <>
      <HeaderAuth />
      <main className="container mx-auto max-w-7xl">{children}</main>
      {/* <FooterAuth /> */}
    </>
  );
};

export default AuthLayout;
