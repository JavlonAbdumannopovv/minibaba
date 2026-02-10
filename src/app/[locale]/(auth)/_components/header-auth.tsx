import LanguageDropdown from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

const HeaderAuth = () => {
  return (
    <header className="border-border bg-surface flex h-[80] border-b">
      <div className="max-width-7xl container mx-auto flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex justify-between gap-2">
          <LanguageDropdown />
          <Button variant={"outline"} size="lg" className="text-primary font-bold">
            Yordam
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderAuth;
