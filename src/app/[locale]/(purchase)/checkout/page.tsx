"use client";

import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CheckoutValidation } from "@/validations/checkout.validation";
import { CheckoutShippingAddress } from "./_components/checkout-shipping-address";
import CheckoutDeliveryOptions from "./_components/checkout-delivery-options";
import CheckoutPaymentMethods from "./_components/checkout-payment-methods";
import CheckoutSummary from "./_components/checkout-summary";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { useOrderStore } from "@/store/orderStore";
import { useCartStore } from "@/store/cartStore";

type CheckoutValues = z.infer<typeof CheckoutValidation.schema>;

export default function CheckoutPage() {
  const methods = useForm<CheckoutValues>({
    resolver: zodResolver(CheckoutValidation.schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      shipping: {
        fullName: "",
        phone: "",
        country: "",
        province: "",
        city: "",
        zip: "",
        addressLine: "",
      },
      delivery: {}, // type yo‘q
      payment: {}, // method yo‘q
    } as any,
  });

  const buildDraft = useOrderStore((s) => s.buildDraft);
  const clearDraft = useOrderStore((s) => s.clearDraft);
  const clearSelected = useCartStore((s) => s.clearSelection);

  const onSubmit = (values: CheckoutValues) => {
    const draft = buildDraft(values);

    // mana shu yerda hammasi bitta object bo'lib keladi
    console.log("ORDER DRAFT:", draft);

    // mock: submitdan keyin cartni tozalash (faqat selectedlarni)
    clearSelected();

    // keyin: API call / order create / payment redirect

    methods.reset();
  };

  return (
    <div>
      <Breadcrumbs />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-black tracking-tight">Buyurtmani rasmiylashtirish</h1>
              </div>

              <CheckoutShippingAddress />
              <CheckoutDeliveryOptions />
              <CheckoutPaymentMethods />
            </div>

            <div></div>

            <aside className="w-full lg:w-[400px]">
              <div className="sticky top-24 space-y-4">
                <CheckoutSummary />
              </div>
            </aside>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
