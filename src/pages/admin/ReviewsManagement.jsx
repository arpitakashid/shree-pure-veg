import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

import ReviewCard from "../../components/admin/ReviewCard";

export default function ReviewsManagement() {
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
    async function approveReview(id) {
    try {
      const { error } = await supabase
        .from("reviews")
        .update({
          approved: true,
        })
        .eq("id", id);

      if (error) throw error;

      alert("Review approved successfully.");

      loadReviews();

    } catch (err) {
      console.error(err);
      alert("Failed to approve review.");
    }
  }

  async function deleteReview(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", id);

      if (error) throw error;

      alert("Review deleted successfully.");

      loadReviews();

    } catch (err) {
      console.error(err);
      alert("Failed to delete review.");
    }
  }
    return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-white mb-6">
        Reviews Management
      </h1>

      {loading ? (

        <div className="text-center text-white py-10">
          Loading reviews...
        </div>

      ) : reviews.length === 0 ? (

        <div className="text-center text-gray-400 py-10">
          No reviews submitted yet.
        </div>

      ) : (

        <div className="space-y-6">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              onApprove={approveReview}
              onDelete={deleteReview}
            />
          ))}

        </div>

      )}

    </div>
  );
}