import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const locales = ["uz", "ru", "en"] as const;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) notFound();

  // MUHIM: messages'ni bevosita locale bo'yicha yuklaymiz
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
