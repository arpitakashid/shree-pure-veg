import { CheckCircle, Trash2, Star } from "lucide-react";

export default function ReviewCard({
  review,
  onApprove,
  onDelete,
}) {
  return (
    <div className="bg-[#111111] border border-yellow-500/20 rounded-xl p-6">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-white text-xl font-semibold">
            {review.name}
          </h2>

          <div className="flex items-center gap-1 mt-2">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                className={
                  star <= review.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-600"
                }
              />
            ))}

          </div>

          <p className="text-gray-300 mt-4">
            {review.review}
          </p>

          <p className="text-sm text-gray-500 mt-4">
            {new Date(review.created_at).toLocaleDateString()}
          </p>

          <div className="mt-3">

            {review.approved ? (
              <span className="text-green-400 font-semibold">
                Approved
              </span>
            ) : (
              <span className="text-yellow-400 font-semibold">
                Pending Approval
              </span>
            )}

          </div>

        </div>

        <div className="flex gap-3">

          {!review.approved && (
            <button
              onClick={() => onApprove(review.id)}
              className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-lg"
            >
              <CheckCircle size={20} />
            </button>
          )}

          <button
            onClick={() => onDelete(review.id)}
            className="bg-red-600 hover:bg-red-500 text-white p-3 rounded-lg"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}