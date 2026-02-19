import type { CheckoutValues } from "@/types/checkout.type";
import type { OrderLine, OrderPricing } from "@/types/order.type";

const DELIVERY_FEES: Record<CheckoutValues["delivery"]["type"], number> = {
  courier: 30000,
  pickup: 0,
};

export function calcOrderPricing(
  lines: OrderLine[],
  deliveryType: CheckoutValues["delivery"]["type"],
): OrderPricing {
  const itemsSubtotalUZS = lines.reduce((sum, l) => sum + l.lineTotalUZS, 0);
  const deliveryFeeUZS = DELIVERY_FEES[deliveryType] ?? 0;

  // hozircha 0 yoki 12% ni keyin sozlaysan (realda backend hisoblaydi)
  const vatUZS = 0;

  const grandTotalUZS = itemsSubtotalUZS + deliveryFeeUZS + vatUZS;

  return { itemsSubtotalUZS, deliveryFeeUZS, vatUZS, grandTotalUZS };
}
