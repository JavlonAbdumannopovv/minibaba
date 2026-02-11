import { buyerLinks, sellerLinks, socialLinks } from "@/constants";
import Link from "next/link";

function HomeFooter() {
  return (
    <footer className="border-border bg-surface border-t pt-16 pb-24 transition duration-500 md:pb-16">
      <div className="mx-auto grid max-w-[1280] grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href={"/"} className="mb-6 flex items-center gap-2">
            <div className="bg-primary text-text-inverse rounded p-1">
              <span className="material-symbols-outlined text-xl">package_2</span>
            </div>
            <h2 className="dark:text-text-inverse text-xl font-extrabold text-[#181411]">
              Minibaba
            </h2>
          </Link>

          <p className="text-text-muted mb-6 text-sm">
            O&apos;zbekistondagi eng yirik ulgurji savdo platformasi. Biz tadbirkorlar va zavodlarni
            bitta joyga jamlaymiz.
          </p>

          <div className="flex gap-4">
            <a
              className="hover:bg-primary hover:text-text-inverse bg-bg flex h-10 w-10 items-center justify-center rounded shadow transition-colors"
              href={socialLinks[0].href}
              aria-label={socialLinks[0].label}
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>

            <a
              className="hover:bg-primary hover:text-text-inverse bg-bg flex h-10 w-10 items-center justify-center rounded shadow transition-colors"
              href={socialLinks[1].href}
              aria-label={socialLinks[1].label}
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>

            <a
              className="hover:bg-primary hover:text-text-inverse bg-bg flex h-10 w-10 items-center justify-center rounded shadow transition-colors"
              href={socialLinks[2].href}
              aria-label={socialLinks[2].label}
            >
              <span className="material-symbols-outlined text-lg">call</span>
            </a>
          </div>
        </div>

        {/* Buyers */}
        <div>
          <h4 className="mb-6 font-bold">Xaridorlar uchun</h4>
          <ul className="text-text-muted space-y-4 text-sm">
            {buyerLinks.map((l) => (
              <li key={l.href}>
                <Link className="hover:text-primary" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sellers */}
        <div>
          <h4 className="mb-6 font-bold">Sotuvchilar uchun</h4>
          <ul className="text-text-muted space-y-4 text-sm">
            {sellerLinks.map((l) => (
              <li key={l.href}>
                <Link className="hover:text-primary" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* App */}
        <div>
          <h4 className="mb-6 font-bold">Ilovamizni yuklang</h4>
          <p className="text-text-muted mb-4 text-sm">
            Har doim aloqada bo&apos;ling va eng yaxshi narxlardan xabardor bo&apos;ling.
          </p>

          <div className="space-y-3">
            <button className="text-text-inverse bg-bg-dark flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border py-2.5 transition-colors hover:bg-gray-900">
              <span className="material-symbols-outlined">ios</span>
              <div className="text-left">
                <p className="text-sm leading-none font-bold">App Store</p>
              </div>
            </button>
            <button className="text-text-inverse bg-bg-dark flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border py-2.5 transition-colors hover:bg-gray-900">
              <span className="material-symbols-outlined">play_arrow</span>
              <div className="text-left">
                <p className="text-sm leading-none font-bold">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-border text-text-muted mx-auto mt-16 max-w-[1280] border-t px-4 pt-8 text-center text-xs md:px-10">
        © 2026 Minibaba Marketplace. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

export default HomeFooter;
