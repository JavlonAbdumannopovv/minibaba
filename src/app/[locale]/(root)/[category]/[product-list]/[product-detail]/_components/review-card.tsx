import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Review } from "@/types/product.type";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-primary text-primary" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <Card key={review.id} className="bg-surface rounded-2xl border-none">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {review.name[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex items-center gap-4">
              <p className="text-text text-sm font-semibold">{review.name}</p>
              <span className="text-muted-foreground text-xs">{review.date}</span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Stars rating={review.rating} />
        </div>
        <p className="text-text mt-3 text-sm leading-relaxed">{review.text}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
