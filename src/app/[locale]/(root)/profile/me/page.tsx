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
    Globe
} from 'lucide-react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const AboutMePage = () => {
    const t = useTranslations('Profile');
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const statsCards = [
        { icon: ShoppingBag, label: t('cards.orders'), desc: t('cards.ordersDesc'), color: "text-blue-500", bg: "bg-blue-50" },
        { icon: Heart, label: t('cards.favorites'), desc: t('cards.favoritesDesc'), color: "text-red-500", bg: "bg-red-50" },
        { icon: MapPin, label: t('cards.addresses'), desc: t('cards.addressesDesc'), color: "text-orange-500", bg: "bg-orange-50" },
        { icon: CreditCard, label: t('cards.payments'), desc: t('cards.paymentsDesc'), color: "text-green-500", bg: "bg-green-50" },
    ];

    return (
        <div className="space-y-6">
           
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {statsCards.map((card, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                        <div className={`${card.bg} ${card.color} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                            <card.icon size={20} />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 leading-tight">{card.label}</h3>
                        <p className="text-xs text-gray-400 mt-1">{card.desc}</p>
                    </div>
                ))}
            </div>

        
            <div className="relative bg-linear-to-r from-orange-500 to-orange-400 rounded-3xl p-8 overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="text-white max-w-md">
                        <h2 className="text-2xl font-bold mb-2">{t('sellerBanner.title')}</h2>
                        <p className="text-orange-50 opacity-90 text-sm">
                            {t('sellerBanner.description')}
                        </p>
                    </div>
                    <button className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
                        {t('sellerBanner.button')}
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <User size={18} className="text-orange-500" /> {t('personalInfo.title')}
                        </h3>
                        <button onClick={() => setIsOpen(true)} className="text-orange-500 text-sm font-medium hover:underline">
                            {t('personalInfo.edit')}
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{t('personalInfo.fullName')}</p>
                            <p className="font-semibold text-gray-700">Alisher Usmonov</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{t('personalInfo.email')}</p>
                            <p className="font-semibold text-gray-700">alisher.u@example.uz</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{t('personalInfo.birthDate')}</p>
                                <p className="font-semibold text-gray-700">12.05.1992</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{t('personalInfo.gender')}</p>
                                <p className="font-semibold text-gray-700">{t('personalInfo.genderMale')}</p>
                            </div>
                        </div>
                    </div>
                </div>

           
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-6">
                        <Settings size={18} className="text-orange-500" /> {t('settings.title')}
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Globe size={18} className="text-gray-400" />
                                <span>{t('settings.language')}</span>
                            </div>
                            <span className="text-xs font-bold text-gray-400 uppercase">
                                {locale === 'uz' ? "O'zbekcha" : locale === 'ru' ? "Русский" : "English"}
                            </span>
                        </div>
                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Bell size={18} className="text-gray-400" />
                                <span>{t('settings.notifications')}</span>
                            </div>
                            <div className="w-10 h-5 bg-orange-500 rounded-full relative">
                                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <ShieldCheck size={18} className="text-gray-400" />
                                <span>{t('settings.security')}</span>
                            </div>
                            <Edit2 size={14} className="text-gray-300" />
                        </div>
                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <HelpCircle size={18} className="text-gray-400" />
                                <span>{t('settings.helpCenter')}</span>
                            </div>
                            <Edit2 size={14} className="text-gray-300" />
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <form>
                    <DialogContent className="sm:max-w-sm bg-white">
                        <DialogHeader>
                            <DialogTitle>{t('dialog.title')}</DialogTitle>
                            <DialogDescription>
                                {t('dialog.description')}
                            </DialogDescription>
                        </DialogHeader>
                        
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">{t('dialog.cancel')}</Button>
                            </DialogClose>
                            <Button type="submit">{t('dialog.save')}</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
};

export default AboutMePage;