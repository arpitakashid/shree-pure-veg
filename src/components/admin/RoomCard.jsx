import { Trash2 } from "lucide-react";

export default function RoomCard({
  room,
  onDelete,
}) {
  return (
    <div className="bg-[#0B0B0B] border border-yellow-500/20 rounded-xl overflow-hidden shadow-lg">

      <img
        src={room.image}
        alt="Room"
        className="w-full h-64 object-cover"
      />

      <div className="p-4 flex justify-end">

        <button
          onClick={() => onDelete(room.id)}
          className="bg-red-600 hover:bg-red-500 text-white p-3 rounded-lg transition"
        >
          <Trash2 size={20} />
        </button>

      </div>

    </div>
  );
}