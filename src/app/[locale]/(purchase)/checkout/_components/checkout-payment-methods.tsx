"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckoutValues } from "@/types/checkout.type";
import { checkoutPaymentMethods } from "@/constants";
import Image from "next/image";

function CheckoutPaymentMethods() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CheckoutValues>();

  const selected = watch("payment.method");
  const errMsg = errors.payment?.method?.message;

  return (
    <Card className="border-border bg-surface rounded-xl border shadow-sm">
      <CardHeader className="p-6 pb-0">
        <div className="mb-6 flex items-center gap-3">
          <span className="bg-primary text-text-inverse flex h-8 w-8 items-center justify-center rounded-full font-bold">
            3
          </span>
          <h2 className="text-xl font-bold">To'lov usuli</h2>
        </div>

        {errMsg ? <p className="text-error text-sm font-medium">{errMsg}</p> : null}
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {checkoutPaymentMethods.map((m) => {
            const isActive = selected === m.id;

            return (
              <div key={m.id}>
                <input
                  id={`${m.id}`}
                  type="radio"
                  value={m.id}
                  className="peer sr-only"
                  {...register("payment.method")}
                />

                <label
                  htmlFor={`${m.id}`}
                  className={[
                    "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-6 text-center transition-all",
                    "border-border hover:border-primary/",
                    "peer-checked:border-primary peer-checked:ring-primary/20 peer-checked:ring-2",
                  ].join(" ")}
                >
                  {/* logos */}
                  <div className="mb-3 flex items-center justify-center gap-2">
                    {m.logos?.map((logo) => (
                      <Image
                        key={logo.alt}
                        alt={logo.alt}
                        src={logo.src}
                        width={200}
                        height={200}
                        className="h-20 w-auto object-contain"
                      />
                    ))}
                  </div>

                  <div className="text-text font-semibold">{m.title}</div>

                  {/* active indicator */}
                  <div
                    className={[
                      "bg-primary mt-3 h-2 w-2 rounded-full transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden
                  />
                </label>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default CheckoutPaymentMethods;
