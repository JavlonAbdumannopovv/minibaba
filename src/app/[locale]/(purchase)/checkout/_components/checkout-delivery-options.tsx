"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckoutValues } from "@/types/checkout.type";
import { checkoutDeliveryOptions } from "@/constants";

function CheckoutDeliveryOptions() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CheckoutValues>();

  const selected = watch("delivery.type");
  const errMsg = errors.delivery?.type?.message;

  return (
    <Card className="border-border bg-surface rounded-xl border shadow-sm">
      <CardHeader className="p-6 pb-0">
        <div className="mb-6 flex items-center gap-3">
          <span className="bg-primary text-text-inverse flex h-8 w-8 items-center justify-center rounded-full font-bold">
            2
          </span>
          <h2 className="text-xl font-bold">Yetkazib berish turi</h2>
        </div>

        {errMsg ? <p className="text-error text-sm font-medium">{errMsg}</p> : null}
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {checkoutDeliveryOptions.map(
            ({ id, title, description, priceLabel, Icon, priceTone }) => {
              const isActive = selected === id;

              return (
                <div key={id}>
                  {/* real radio */}
                  <input
                    id={`delivery-${id}`}
                    type="radio"
                    value={id}
                    className="peer sr-only"
                    {...register("delivery.type")}
                  />

                  {/* card */}
                  <label
                    htmlFor={`delivery-${id}`}
                    className={[
                      "block cursor-pointer rounded-xl border-2 p-4 transition-all",
                      "border-border hover:border-primary/50",
                      "peer-checked:border-primary peer-checked:ring-primary/20 peer-checked:ring-2",
                    ].join(" ")}
                  >
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <Icon className="text-primary h-8 w-8" />

                      {/* check icon (faqat tanlanganda ko'rinsin) */}
                      <span
                        className={[
                          "text-primary inline-flex items-center justify-center opacity-0 transition-opacity",
                          isActive ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                        aria-hidden
                      >
                        {/* shadcn icon ishlatmaymiz, oddiy dot ham bo'ladi */}
                        <span className="bg-primary h-2.5 w-2.5 rounded-full" />
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-text text-lg font-bold">{title}</div>
                      <div className="text-text-muted text-sm">{description}</div>
                      <div
                        className={[
                          "mt-3 font-bold",
                          priceTone === "success" ? "text-green-600" : "text-primary",
                        ].join(" ")}
                      >
                        {priceLabel}
                      </div>
                    </div>
                  </label>
                </div>
              );
            },
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default CheckoutDeliveryOptions;
