import { usePathname } from "next/navigation";
import React from "react";
import { ChevronRight } from "lucide-react";

const MyOrderBreadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const breadcrumbs = paths.slice(2);

  const getTranslate = (path: string) => {
    const translations: Record<string, string> = {
      profile: "Profil",
      "my-orders": "Mening buyurtmalarim",
    };

    return translations[path] || path;
  };

  return (
    <div className="flex items-center gap-2 py-4 text-[15px]">
      <div className="cursor-pointer text-slate-500 transition-colors hover:text-[#F47B25]">
        Bosh sahifa
      </div>

      {breadcrumbs.map((path, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <div
              className={` ${
                isLast
                  ? "font-semibold text-slate-900"
                  : "cursor-pointer text-slate-500 hover:text-[#F47B25]"
              } capitalize transition-colors`}
            >
              {getTranslate(path)}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MyOrderBreadcrumbs;
