import { useState } from "react";
import { supabase } from "../../lib/supabase";
import StarRating from "./StarRating";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (!review.trim()) {
      alert("Please write your review.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("reviews")
        .insert([
          {
            name,
            rating,
            review,
            approved: false,
          },
        ]);

      if (error) throw error;

      alert(
        "Thank you! Your review has been submitted for admin approval."
      );

      setName("");
      setReview("");
      setRating(0);

    } catch (err) {
      console.error(err);
      alert("Failed to submit review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#111] py-20 text-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Share Your Experience
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700"
          />

          <div>
            <p className="mb-3 text-lg">
              Your Rating
            </p>

            <StarRating
              rating={rating}
              setRating={setRating}
            />
          </div>

          <textarea
            rows="5"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-black px-8 py-4 rounded-xl font-semibold transition"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>

        </form>

      </div>
    </section>
  );
}