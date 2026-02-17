export type CheckoutValues = {
  shipping: {
    fullName: string;
    phone: string;
    country: string;
    province: string;
    city: string;
    zip: string;
    address: string;
  };
  delivery: { type: "courier" | "pickup" };
  payment: { method: "payme" | "click" | "uzcard-humo" };
};

export type CheckoutDeliveryOptions = {
  id: CheckoutValues["delivery"]["type"];
  title: string;
  description: string;
  priceLabel: string;
  Icon: React.ComponentType<{ className?: string }>;
  priceTone?: "primary" | "success";
};

export type CheckoutPaymentMethod = {
  id: CheckoutValues["payment"]["method"];
  title: string;
  logos?: { alt: string; src: string; className?: string }[];
};
