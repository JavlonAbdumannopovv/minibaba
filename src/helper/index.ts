export function formatUZS(amount: number) {
  const n = Math.round(amount);
  // 19518000 -> "19 518 000 so'm"
  const s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${s} so'm`;
}
