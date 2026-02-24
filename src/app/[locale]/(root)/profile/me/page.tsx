"use client";
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  CreditCard,
  Edit2,
  Settings,
  Bell,
  ShieldCheck,
  HelpCircle,
  Globe,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const AboutMePage = () => {
  const t = useTranslations("Profile");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const statsCards = [
    {
      icon: ShoppingBag,
      label: t("cards.orders"),
      desc: t("cards.ordersDesc"),
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: Heart,
      label: t("cards.favorites"),
      desc: t("cards.favoritesDesc"),
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: MapPin,
      label: t("cards.addresses"),
      desc: t("cards.addressesDesc"),
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      icon: CreditCard,
      label: t("cards.payments"),
      desc: t("cards.paymentsDesc"),
      color: "text-green-500",
      bg: "bg-green-50",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statsCards.map((card, idx) => (
          <div
            key={idx}
            className="cursor-pointer rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className={`${card.bg} ${card.color} mb-3 flex h-10 w-10 items-center justify-center rounded-xl`}
            >
              <card.icon size={20} />
            </div>
            <h3 className="text-sm leading-tight font-bold text-gray-800">{card.label}</h3>
            <p className="mt-1 text-xs text-gray-400">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-orange-500 to-orange-400 p-8">
        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-md text-white">
            <h2 className="mb-2 text-2xl font-bold">{t("sellerBanner.title")}</h2>
            <p className="text-sm text-orange-50 opacity-90">{t("sellerBanner.description")}</p>
          </div>
          <button className="rounded-xl bg-white px-8 py-3 font-bold text-orange-500 shadow-lg transition-transform hover:scale-105">
            {t("sellerBanner.button")}
          </button>
        </div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-bold text-gray-800">
              <User size={18} className="text-orange-500" /> {t("personalInfo.title")}
            </h3>
            <button
              onClick={() => setIsOpen(true)}
              className="text-sm font-medium text-orange-500 hover:underline"
            >
              {t("personalInfo.edit")}
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-[10px] font-bold text-gray-400 uppercase">
                {t("personalInfo.fullName")}
              </p>
              <p className="font-semibold text-gray-700">Alisher Usmonov</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-bold text-gray-400 uppercase">
                {t("personalInfo.email")}
              </p>
              <p className="font-semibold text-gray-700">alisher.u@example.uz</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-1 text-[10px] font-bold text-gray-400 uppercase">
                  {t("personalInfo.birthDate")}
                </p>
                <p className="font-semibold text-gray-700">12.05.1992</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-bold text-gray-400 uppercase">
                  {t("personalInfo.gender")}
                </p>
                <p className="font-semibold text-gray-700">{t("personalInfo.genderMale")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-2 font-bold text-gray-800">
            <Settings size={18} className="text-orange-500" /> {t("settings.title")}
          </h3>
          <div className="space-y-2">
            <div className="flex cursor-pointer items-center justify-between rounded-xl p-3 transition-colors hover:bg-gray-50">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Globe size={18} className="text-gray-400" />
                <span>{t("settings.language")}</span>
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase">
                {locale === "uz" ? "O'zbekcha" : locale === "ru" ? "Русский" : "English"}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-gray-50">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Bell size={18} className="text-gray-400" />
                <span>{t("settings.notifications")}</span>
              </div>
              <div className="relative h-5 w-10 rounded-full bg-orange-500">
                <div className="absolute top-1 right-1 h-3 w-3 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-between rounded-xl p-3 transition-colors hover:bg-gray-50">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={18} className="text-gray-400" />
                <span>{t("settings.security")}</span>
              </div>
              <Edit2 size={14} className="text-gray-300" />
            </div>
            <div className="flex cursor-pointer items-center justify-between rounded-xl p-3 transition-colors hover:bg-gray-50">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <HelpCircle size={18} className="text-gray-400" />
                <span>{t("settings.helpCenter")}</span>
              </div>
              <Edit2 size={14} className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <form>
          <DialogContent className="bg-white sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>{t("dialog.title")}</DialogTitle>
              <DialogDescription>{t("dialog.description")}</DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">{t("dialog.cancel")}</Button>
              </DialogClose>
              <Button type="submit">{t("dialog.save")}</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default AboutMePage;
