import { createNavigation } from "next-intl/navigation";

export const { Link, useRouter, usePathname, redirect, permanentRedirect } = createNavigation({
  locales: ["uz", "ru", "en"],
  defaultLocale: "uz",
});
