"use client";

import { Languages } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { lngs } from "@/constants";

import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { SheetClose } from "../ui/sheet";

const locales = ["uz", "en", "ru"];

function LanguageDropdown() {
  const pathname = usePathname(); // masalan: "/en/login"

  // locale'ni olib tashlaymiz
  const segments = pathname.split("/").filter(Boolean); // ["en", "login"]
  const rest = locales.includes(segments[0]) ? segments.slice(1) : segments;

  const cleanPath = "/" + rest.join("/"); // "/login" yoki "/"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"sm"}>
          <Languages />
          {lngs.find((lng) => lng.route === segments[0])?.label || "Til"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="border-border bg-surface w-56 transition-all">
        <DropdownMenuGroup>
          {lngs.map((item) => (
            <Link
              key={item.route}
              href={cleanPath === "/" ? "/" : cleanPath} // "/login"
              locale={item.route} // "uz" | "en" | "ru"
            >
              <DropdownMenuItem className="hover:bg-primary/10 hover:text-inverse cursor-pointer gap-2">
                <Image
                  src={`/assets/locales/${item.route}.png`}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <span className="font-space-grotesk font-medium">{item.label}</span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageDropdown;
