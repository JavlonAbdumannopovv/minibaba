"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  item: {
    icon: LucideIcon;
    label: string;
    path: string; // Masalan: "my-orders", "favorite"
  };
};

const SidebarItem = ({ item }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.endsWith(item.path);

  return (
    <button
      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition-all ${
        isActive ? "bg-orange-50 font-semibold text-orange-600" : "text-gray-500 hover:bg-gray-50"
      }`}
      onClick={() => router.push(item.path)}
    >
      <item.icon size={20} />
      <span>{item.label}</span>
    </button>
  );
};

export default SidebarItem;
