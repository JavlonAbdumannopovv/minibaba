"use client"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import MyOrderBreadcrumbs from "./_components/breadcrumbs"
import MainOrder from "./_components/MainOrder"
import MyOrderHeader from "./_components/MyOrderHeader"
import OrderCardBox from "./_components/orderCardBox"

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 flex flex-col g pb-[24px]">
        {/* <MyOrderBreadcrumbs/> */}
        {/* <div className="mt-[24px]"><Breadcrumbs/></div> */}
        <MyOrderHeader/>
        <MainOrder/>
        <OrderCardBox/>
        <OrderCardBox/>
        <OrderCardBox/>
    </div>
  )
}

export default page