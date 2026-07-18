import { Pencil, Trash2 } from "lucide-react";

export default function FoodCard({
  food,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-[#0B0B0B] border border-yellow-500/20 rounded-xl p-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <img
            src={food.image}
            alt={food.name}
            className="w-24 h-24 rounded-xl object-cover border border-yellow-500/20"
          />

          <div>

            <h3 className="text-white text-xl font-semibold">
              {food.name}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Food Item
            </p>

          </div>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(food)}
            className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg text-white transition"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(food.id)}
            className="bg-red-600 hover:bg-red-500 p-3 rounded-lg text-white transition"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}