import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

import RoomForm from "../../components/admin/RoomForm";
import RoomCard from "../../components/admin/RoomCard";

export default function RoomsManagement() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRooms();
  }, []);

  async function loadRooms() {
    try {
      const { data, error } = await supabase
        .from("rooms")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setRooms(data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load rooms.");
    } finally {
      setLoading(false);
    }
  }
    async function addRoom(imageFile) {
    try {
      const fileName = `${Date.now()}-${imageFile.name}`;

      const { error: uploadError } = await supabase.storage
        .from("rooms")
        .upload(fileName, imageFile);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("rooms")
        .getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      const { error } = await supabase
        .from("rooms")
        .insert([
          {
            image: imageUrl,
          },
        ]);

      if (error) throw error;

      alert("Room added successfully.");

      loadRooms();

    } catch (err) {
      console.error(err);
      alert("Failed to add room.");
    }
  }

  async function deleteRoom(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room?"
    );

    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from("rooms")
        .delete()
        .eq("id", id);

      if (error) throw error;

      alert("Room deleted successfully.");

      loadRooms();

    } catch (err) {
      console.error(err);
      alert("Failed to delete room.");
    }
  }
    return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-white mb-6">
        Rooms Management
      </h1>

      <RoomForm addRoom={addRoom} />

      {loading ? (

        <div className="text-center text-white py-10">
          Loading rooms...
        </div>

      ) : rooms.length === 0 ? (

        <div className="text-center text-gray-400 py-10">
          No rooms added yet.
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onDelete={deleteRoom}
            />
          ))}

        </div>

      )}

    </div>
  );
}