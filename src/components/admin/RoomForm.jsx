import { useState } from "react";

export default function RoomForm({ addRoom }) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!image) {
      alert("Please select a room image.");
      return;
    }

    try {
      setUploading(true);

      await addRoom(image);

      setImage(null);

      const fileInput = document.getElementById("room-image");

      if (fileInput) {
        fileInput.value = "";
      }

    } catch (err) {
      console.error(err);
      alert("Failed to upload room.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="bg-[#1B1B1B] border border-yellow-500/20 rounded-xl p-5">

      <h3 className="text-white text-lg font-semibold mb-4">
        Add Room
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          id="room-image"
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
          {uploading ? "Uploading..." : "Upload Room"}
        </button>

      </form>

    </div>
  );
}