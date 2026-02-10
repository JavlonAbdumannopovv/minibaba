import { getRequestConfig } from "next-intl/server";

const locales = ["uz", "ru", "en"] as const;
const defaultLocale = "uz";

export default getRequestConfig(async ({ locale }: any) => {
  const safeLocale = locales.includes(locale as any) ? locale : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../locales/${safeLocale}.json`)).default,
  };
});
