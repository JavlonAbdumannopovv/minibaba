"use client";
import MyOrderBreadcrumbs from "./_components/breadcrumbs";
import MainOrder from "./_components/MainOrder";
import MyOrderHeader from "./_components/MyOrderHeader";
import OrderCardBox from "./_components/orderCardBox";

const page = () => {
  return (
    <div className="mx-auto max-w-7xl px-3 pb-[24px]">
      <MyOrderBreadcrumbs />
      <MyOrderHeader />
      <MainOrder />
      <OrderCardBox />
      <OrderCardBox />
      <OrderCardBox />
    </div>
  );
};

export default page;
