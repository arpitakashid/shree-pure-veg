import { useState } from "react";

export default function FoodForm({
  categoryId,
  addFood,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter food name.");
      return;
    }

    if (!image) {
      alert("Please select a food image.");
      return;
    }

    try {
      setUploading(true);

      await addFood(categoryId, name, image);

      setName("");
      setImage(null);

      const fileInput = document.getElementById(
        `food-image-${categoryId}`
      );

      if (fileInput) {
        fileInput.value = "";
      }

    } catch (err) {
      console.error(err);
      alert("Failed to add food.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="bg-[#1B1B1B] border border-yellow-500/20 rounded-xl p-5">

      <h3 className="text-white text-lg font-semibold mb-4">
        Add Food Item
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Food Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#0B0B0B] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-500"
        />

        <input
          id={`food-image-${categoryId}`}
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="text-white w-full"
        />

        <button
          type="submit"
          disabled={uploading}
          className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-black font-semibold px-6 py-3 rounded-lg"
        >
          {uploading ? "Uploading..." : "Save Food"}
        </button>

      </form>

    </div>
  );
}