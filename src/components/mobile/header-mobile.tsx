"use client";

import HomeSearch from "@/app/[locale]/(root)/_components/search";
import LanguageDropdown from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories, navLinks } from "@/constants";
import { AlignCenter } from "lucide-react";
import { Link } from "@/i18n/navigation";
import SidebarItem from "@/app/[locale]/(root)/(home)/_components/sidebar-item";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function HeaderMobile() {
  const t = useTranslations("Header");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" aria-label="mobile-hamburger-menu">
          <AlignCenter />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="bg-bg flex flex-col gap-8">
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
                <SheetClose asChild>
                  <Link href={nav.route} className="hover:text-primary">
                    {t(nav.name)}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Tillar */}
          <LanguageDropdown />
          {/* Savat */}
          <Link href="/cart">
            <button className="hover:text-primary relative flex cursor-pointer flex-col items-center gap-0.5 transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="text-[10px] font-bold">{t("shoppingCart")}</span>
              <span className="bg-primary text-text absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold">
                0
              </span>
            </button>
          </Link>

          {/* Kirish */}
          <SheetClose asChild>
            <Link href="/login">
              <button className="text-text hover:text-primary flex cursor-pointer flex-col items-center gap-0.5 transition-colors">
                <span className="material-symbols-outlined">person</span>
                <span className="text-[10px] font-bold">{t("login")}</span>
              </button>
            </Link>
          </SheetClose>
        </div>

        {/* Kategoriyalar */}
        <aside className="bg-background col-span-3 block rounded-xl border p-4 shadow-sm lg:hidden">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <span className="material-symbols-outlined text-primary">menu</span>
            {t("categories")}
          </h3>

          <nav>
            <ul className="space-y-1">
              {categories.map((item) => (
                <SidebarItem key={item.id} item={item} />
              ))}
            </ul>
          </nav>
        </aside>
      </SheetContent>
    </Sheet>
  );
}

export default HeaderMobile;
