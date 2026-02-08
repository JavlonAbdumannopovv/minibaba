import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const HomeSearch = () => {
  return (
    <div className="border-border hover:border-primary bg-bg flex flex-1 items-center gap-2 rounded-lg border px-2 py-1 transition-all">
      <Search />
      <Input
        className="p border-0 shadow-none focus-visible:ring-0"
        placeholder="Mahsulot yoki sotuvchini qidiring..."
      />
      <Button className="shrink-0">Qidirish</Button>
    </div>
  );
};

export default HomeSearch;
