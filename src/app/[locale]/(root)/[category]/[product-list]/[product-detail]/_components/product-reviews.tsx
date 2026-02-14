// components/reviews-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Review } from "@/types/product.type";
import ReviewCard from "./review-card";

const reviews: Review[] = [
  {
    id: 1,
    name: "Javlon Abdumannopov",
    date: "Feb 9, 2026",
    rating: 5,
    text: "Bu mahsulot juda yaxshi sifatga ega va tez yetkazib berildi. Sotuvchi juda yaxshi va muloqot qilish oson edi. Men bu do'kondan yana xarid qilishni rejalashtiryapman!",
  },
  {
    id: 2,
    name: "Ahmad Shaxmatov",
    date: "Feb 9, 2026",
    rating: 4,
    text: "Mahsulot yaxshi lekin biroz kechroq yetkazib berildi.",
  },
  {
    id: 3,
    name: "G'ishmat Toshmatov",
    date: "Feb 9, 2026",
    rating: 4,
    text: "Sotuvchi bilan muloqot qilish oson edi va ularning mijozlarga xizmat ko'rsatish yaxshi.",
  },
  {
    id: 4,
    name: "Sardorbek Yusupov",
    date: "Feb 9, 2026",
    rating: 4.5,
    text: "Mahsulot umuman olganda yaxshi, lekin qadoqlash yaxshiroq bo'lishi mumkin edi.",
  },
];

export default function ProductReviews() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 space-y-4 sm:grid-cols-2">
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </div>
  );
}
