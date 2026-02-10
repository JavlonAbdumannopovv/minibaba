import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

const HomeSearch = () => {
  const t = useTranslations("Header");

  return (
    <div className="border-border hover:border-primary bg-bg flex flex-1 items-center gap-2 rounded-lg border px-2 py-1 transition-all">
      <Search />
      <Input
        className="p border-0 shadow-none focus-visible:ring-0"
        placeholder={t("searchPlaceholder")}
      />
      <Button className="shrink-0">{t("search")}</Button>
    </div>
  );
};

export default HomeSearch;
