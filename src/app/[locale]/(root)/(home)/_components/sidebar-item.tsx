"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Category } from "@/types";
import { useState } from "react";

type Props = {
  item: Category;
};

const SidebarItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <button
            className={[
              "group flex w-full cursor-pointer items-center justify-between rounded-lg p-2 text-left transition-all",
              "hover:bg-primary/10",
            ].join(" ")}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="flex items-center gap-3">
              <span
                className={[
                  "material-symbols-outlined text-text-muted transition-colors",
                  "group-hover:text-primary",
                ].join(" ")}
              >
                {item.icon}
              </span>

              <span>{item.name}</span>
            </span>

            <span
              className={[
                "material-symbols-outlined text-text-muted text-sm transition-colors",
                "group-hover:text-primary",
                isOpen ? "rotate-90" : "",
              ].join(" ")}
            >
              chevron_right
            </span>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-1">
          <ul className="space-y-1 pl-10">
            {/* hammasi */}
            <li>
              <Link
                href={`${item.slug}`}
                className={[
                  "text-muted-foreground block rounded-md px-2 py-1 text-sm transition-colors",
                  "hover:text-primary",
                ].join(" ")}
              >
                Hammasi
              </Link>
            </li>

            {item.subCategories.map((sub) => {
              return (
                <li key={sub.id}>
                  <Link
                    href={`${item.slug}/${sub.slug}`}
                    className={[
                      "text-muted-foreground block rounded-md px-2 py-1 text-sm transition-colors",
                      "hover:text-primary",
                    ].join(" ")}
                  >
                    {sub.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
};

export default SidebarItem;
