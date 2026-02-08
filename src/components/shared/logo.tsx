import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-primary text-xl font-bold">
      <div className="flex shrink-0 items-center gap-2">
        <div className="bg-primary rounded-lg p-1.5 text-white">
          <span className="material-symbols-outlined text-2xl font-bold">package_2</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-[#181411] dark:text-white">
          Minibaba
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
