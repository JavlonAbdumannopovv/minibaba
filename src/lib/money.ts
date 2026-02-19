export function formatUZS(amount: number, locale: string = "uz") {
  const intlLocale = locale === "ru" ? "ru-RU" : locale === "en" ? "en-US" : "uz-UZ";

  const formatted = new Intl.NumberFormat(intlLocale, {
    maximumFractionDigits: 0,
  }).format(amount);

  return `${formatted} UZS`;
}
