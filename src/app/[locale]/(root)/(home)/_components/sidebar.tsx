import { categories } from "@/constants";
import SidebarItem from "./sidebar-item";
import { Category } from "@/types";

type Props = {
  item: Category;
};

const Sidebar = () => {
  return (
    <aside className="bg-background border-border col-span-3 hidden rounded-xl border p-4 shadow-sm lg:block">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <span className="material-symbols-outlined text-primary">menu</span>
        Kategoriyalar
      </h3>

      <nav>
        <ul className="space-y-1">
          {categories.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
