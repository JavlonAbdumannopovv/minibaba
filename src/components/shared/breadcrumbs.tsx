"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  // masalan: /uz/elektronika/kompyuter

  const segments = pathname.split("/").filter(Boolean);
  // ["uz", "elektronika", "kompyuter"]

  // 1-segment til bo'lsa, olib tashlaymiz
  const [, ...rest] = segments;
  // ["elektronika", "kompyuter"]

  const crumbs = [
    { label: "Bosh sahifa", href: "/" },
    ...rest.map((seg, idx) => {
      const href = "/" + segments.slice(0, idx + 2).join("/");
      return {
        label: decodeURIComponent(seg).replace(/-/g, " "),
        href,
      };
    }),
  ];

  return (
    <nav className="text-muted-foreground mb-6 flex items-center gap-2 text-sm font-medium">
      {crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;

        return (
          <div key={c.href} className="flex items-center gap-2">
            {isLast ? (
              <span className="text-foreground capitalize">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:text-primary capitalize transition-colors">
                {c.label}
              </Link>
            )}

            {!isLast ? (
              <span className="material-symbols-outlined text-xs">chevron_right</span>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
