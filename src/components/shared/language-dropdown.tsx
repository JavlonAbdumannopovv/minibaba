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

function LanguageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border bg-surface w-56 transition-all">
        <DropdownMenuGroup>
          {lngs.map((item) => (
            <DropdownMenuItem
              key={item.route}
              className="hover:bg-primary/10 hover:text-inverse cursor-pointer gap-2"
            >
              <Image
                src={`/assets/locales/${item.route}.png`}
                alt={item.label}
                width={20}
                height={20}
              />
              <span className="font-space-grotesk font-medium">{item.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageDropdown;
