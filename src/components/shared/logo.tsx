import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Logo = () => {
  return (
    <Link href="/" className="text-primary text-xl font-bold">
      <div className="flex shrink-0 items-center gap-2">
        <div className="bg-primary text-text-inverse rounded-lg p-1.5">
          <span className="material-symbols-outlined text-2xl font-bold">package_2</span>
        </div>
        <h1 className="text-text text-2xl font-extrabold tracking-tight">Minibaba</h1>
      </div>
    </Link>
  );
};

export default Logo;
