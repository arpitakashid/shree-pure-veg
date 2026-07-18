import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ComingSoonRooms from "./ComingSoonRooms";

export default function RoomsGrid() {
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
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-white">
        Loading Rooms...
      </div>
    );
  }

  if (rooms.length === 0) {
    return <ComingSoonRooms />;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        Our Rooms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-[#111111] rounded-xl overflow-hidden border border-yellow-500/20 shadow-lg"
          >
            <img
              src={room.image}
              alt="Room"
              className="w-full h-72 object-cover"
            />
          </div>
        ))}

      </div>

    </section>
  );
}