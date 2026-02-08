import { navLinks } from "@/constants";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4 text-sm font-medium">
        {navLinks.map((nav) => (
          <li key={nav.name}>
            <Link href={nav.route} className="hover:text-primary">
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeNavbar;
