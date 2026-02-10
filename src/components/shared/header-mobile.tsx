import HomeSearch from "@/app/[locale]/(root)/_components/search";
import LanguageDropdown from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { AlignCenter } from "lucide-react";
import { Link } from "@/i18n/navigation";

function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"} aria-label="mobile-hamburger-menu">
          <AlignCenter />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className="bg-bg flex flex-col gap-8">
        <SheetHeader className="border-border border-b pb-2">
          <Logo />
          <SheetTitle className="sr-only">Mobil menyu</SheetTitle>
        </SheetHeader>
        <div className="w-full md:block">
          <HomeSearch />
        </div>
        <nav>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((nav) => (
              <li key={nav.name}>
                <Link href={nav.route} className="hover:text-primary">
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
          <Link href="/login">
            <button className="hover:text-primary text-text flex cursor-pointer flex-col items-center gap-0.5 transition-colors">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-bold">Kirish</span>
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default HeaderMobile;
