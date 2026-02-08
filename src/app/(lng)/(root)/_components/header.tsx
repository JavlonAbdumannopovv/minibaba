import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/logo";
import HomeSearch from "./search";
import { Link, ShoppingCart, User } from "lucide-react";
import HomeNavbar from "./navbar";
import LanguageDropdown from "@/components/shared/language-dropdown";
import Mobile from "@/components/shared/mobile";

function HomeHeader() {
  return (
    <header className="border-border bg-surface sticky top-0 z-40 border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <div className="w-full max-md:hidden">
          <HomeSearch />
        </div>
        {/* Actions */}
        <div className="flex items-center gap-6 max-lg:hidden">
          <div>
            <HomeNavbar />
          </div>
          <div className="flex items-center gap-4">
            {/* Tillar */}
            <LanguageDropdown />
            {/* Savat */}
            <button className="hover:text-primary relative flex cursor-pointer flex-col items-center gap-0.5 transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="text-[10px] font-bold">Savat</span>
              {/* Badge */}
              <span className="bg-primary text-text absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold">
                0
              </span>
            </button>
            {/* Kirish */}
            <button className="hover:text-primary text-text flex cursor-pointer flex-col items-center gap-0.5 transition-colors">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-bold">Kirish</span>
            </button>
            {/* Mobile version */}
          </div>
        </div>
        <div className="lg:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
