import { usePathname } from 'next/navigation'
import React from 'react'
import { ChevronRight } from 'lucide-react'

const MyOrderBreadcrumbs = () => {
    const pathname = usePathname()
    const paths = pathname.split("/")
    const breadcrumbs = paths.slice(2)

    const getTranslate = (path: string) => {
        const translations: Record<string, string> = {
            'profile': 'Profil',
            'my-orders': 'Mening buyurtmalarim',
        }
        
        return translations[path] || path
    }

    return (
        <div className="flex items-center gap-2 text-[15px] py-4">
            <div className="text-slate-500 hover:text-[#F47B25] cursor-pointer transition-colors">
                Bosh sahifa
            </div>

            {breadcrumbs.map((path, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                    <React.Fragment key={index}>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <div className={`
                            ${isLast 
                                ? "text-slate-900 font-semibold" 
                                : "text-slate-500 hover:text-[#F47B25] cursor-pointer"
                            } 
                            capitalize transition-colors
                        `}>
                            {getTranslate(path)}
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default MyOrderBreadcrumbs