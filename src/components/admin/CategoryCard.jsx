import {
  FolderOpen,
  ChevronDown,
  ChevronRight,
  Pencil,
  Trash2,
} from "lucide-react";

import FoodForm from "./FoodForm";
import FoodCard from "./FoodCard";

export default function CategoryCard({
  category,
  expandedCategory,
  setExpandedCategory,
  onEdit,
  onDelete,
  addFood,
  foods,
  deleteFood,
}) {

  const expanded = expandedCategory === category.id;

  const categoryFoods = foods.filter(
    (food) => food.category_id === category.id
  );

  function toggleCategory() {
    if (expanded) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category.id);
    }
  }

  return (
    <div className="bg-[#161616] border border-yellow-500/20 rounded-xl overflow-hidden shadow-lg">

      <div className="flex justify-between items-center p-5">

        <div
          onClick={toggleCategory}
          className="flex items-center gap-4 flex-1 cursor-pointer"
        >

          {expanded ? (
            <ChevronDown
              className="text-yellow-400"
              size={22}
            />
          ) : (
            <ChevronRight
              className="text-yellow-400"
              size={22}
            />
          )}

          <FolderOpen
            className="text-yellow-400"
            size={28}
          />

          <h2 className="text-white text-xl font-semibold">
            {category.name}
          </h2>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(category)}
            className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg text-white"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(category.id)}
            className="bg-red-600 hover:bg-red-500 p-3 rounded-lg text-white"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>
            {expanded && (
        <div className="border-t border-yellow-500/20 p-6 bg-[#111111]">

          <FoodForm
            categoryId={category.id}
            addFood={addFood}
          />

          <div className="mt-8 space-y-4">

            {categoryFoods.length === 0 ? (

              <div className="text-center py-8">
                <p className="text-gray-400">
                  No food items added yet.
                </p>
              </div>

            ) : (

              categoryFoods.map((food) => (
                <FoodCard
                  key={food.id}
                  food={food}
                  onEdit={() => {}}
                  onDelete={deleteFood}
                />
              ))

            )}

          </div>

        </div>
      )}

    </div>
  );
}