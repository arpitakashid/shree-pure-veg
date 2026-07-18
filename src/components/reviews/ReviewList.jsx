import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Star } from "lucide-react";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setReviews(data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load reviews.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="bg-[#111] py-20">
        <div className="text-center text-white">
          Loading Reviews...
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className="bg-[#111] py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-white mb-10">
            Customer Reviews
          </h2>

          <p className="text-center text-gray-400">
            No approved reviews yet.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#111] py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-black border border-yellow-500/20 rounded-2xl p-6 shadow-lg"
            >

              <h3 className="text-xl font-semibold text-white">
                {review.name}
              </h3>

              <div className="flex gap-1 my-4">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={20}
                    className={
                      star <= review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }
                  />

                ))}

              </div>

              <p className="text-gray-300 leading-relaxed">
                {review.review}
              </p>

              <p className="text-gray-500 text-sm mt-6">
                {new Date(review.created_at).toLocaleDateString()}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}