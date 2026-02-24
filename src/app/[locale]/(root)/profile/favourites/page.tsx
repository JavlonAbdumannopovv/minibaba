import { FavouriteCard } from "@/components/cards/favouriteCard"

import ProductCard from "@/components/cards/top-product-card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { productsList } from "@/constants"

const page = () => {
  return (
    <div className="mx-auto max-w-7xl flex-wrap px-3">
      <div className="mt-[24px]"><Breadcrumbs/></div>
      <div className="lg:flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-[30px] text-[#0F172A] font-normal">Yoqtirgan maxsulorlarim</div>
          <div className="text-[#64748B] text-[16px]">Sizda jami 12 ta Yoqtirgan maxsulot mavjud</div>
        </div>
        
      </div>
      <div className="py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {productsList.map((p) => (
            <FavouriteCard key={p.id} product={p} />
          ))}
        </div>





      </div>
    </div>
  )
}

export default page