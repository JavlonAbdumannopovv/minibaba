"use client";

import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type Props = {
    item: {
        icon: LucideIcon,
        label: string,
        path: string // Masalan: "my-orders", "favorite"
    }
}

const SidebarItem = ({ item }: Props) => {
    const router = useRouter();
    const pathname = usePathname(); 

    const segments = pathname.split('/');
    const basePath = `/${segments[1]}/${segments[2]}`; 


    const isActive = pathname.endsWith(item.path);

    const handleNavigate = () => {
        router.push(`${basePath}/${item.path}`);
    };

    return (
        <button
            className={`w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                    ? "bg-orange-50 text-orange-600 font-semibold" 
                    : "text-gray-500 hover:bg-gray-50"
            }`}
            onClick={handleNavigate}
        >
            <item.icon size={20} />
            <span>{item.label}</span>
        </button>
    );
};

export default SidebarItem; 