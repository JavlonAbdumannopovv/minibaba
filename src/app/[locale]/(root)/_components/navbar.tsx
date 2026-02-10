import { navLinks } from "@/constants";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const HomeNavbar = () => {
  const t = useTranslations("Header");

  return (
    <nav>
      <ul className="flex items-center gap-4 text-sm font-medium">
        {navLinks.map((nav) => (
          <li key={nav.name}>
            <Link href={nav.route} className="hover:text-primary">
              {t(nav.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeNavbar;
