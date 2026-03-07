"use client";

import { useState } from "react"; 
import { Banknote, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";


const currencies = [
  { code: "UZS", label: "So'm", symbol: "сум" },
  { code: "USD", label: "Dollar", symbol: "$" },
  { code: "RUB", label: "Rubl", symbol: "₽" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "CNY", label: "Yuan", symbol: "¥" },
];

function ValuteDropdown() {
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);

  const handleCurrencyChange = (currency: typeof currencies[0]) => {
    setCurrentCurrency(currency);
  };

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"lg"} className="gap-2 min-w-[100px] border-0 justify-between outline-0">
          <div className="flex items-center gap-2">
            <Banknote className="w-4 h-4 text-muted-foreground" />
            <span className="font-bold">{currentCurrency.code}</span>
          </div>
          <ChevronDown className="w-4 h-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="outline-0 border-border bg-surface w-48 transition-all" align="end">
        <DropdownMenuGroup>
          {currencies.map((item) => (
            <DropdownMenuItem 
              key={item.code}
              onClick={() => handleCurrencyChange(item)}
              className={`hover:bg-primary/10 cursor-pointer justify-between outline-0 ${
                currentCurrency.code === item.code ? "bg-primary/20" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="font-medium text-sm">{item.label}</span>
                <span className="text-[10px] text-muted-foreground uppercase">{item.code}</span>
              </div>
              <span className="font-bold text-primary">{item.symbol}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ValuteDropdown;