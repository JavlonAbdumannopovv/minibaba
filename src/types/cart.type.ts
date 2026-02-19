export type CartSupplier = {
  id: string;
  name: string;
  isTrusted?: boolean;
};

export type CartItem = {
  id: string;
  supplierId: string;

  title: string;
  variantLabel?: string;

  imageUrl: string;

  unitPriceUZS: number; // masalan 45000
  qty: number;

  minQty?: number; // MOQ
  step?: number; // optom qadam

  unitLabel?: string; // "dona", "m", "juft"
  selected: boolean;
};
