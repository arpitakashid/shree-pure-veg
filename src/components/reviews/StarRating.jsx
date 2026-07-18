import { Star } from "lucide-react";

export default function StarRating({
  rating,
  setRating,
  readOnly = false,
}) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={32}
          className={`cursor-pointer transition ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-500"
          }`}
          onClick={() => {
            if (!readOnly) {
              setRating(star);
            }
          }}
        />
      ))}
    </div>
  );
}