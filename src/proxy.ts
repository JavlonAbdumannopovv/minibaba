import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["uz", "ru", "en"],
  defaultLocale: "uz",
});

export default function proxy(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/uz";
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
