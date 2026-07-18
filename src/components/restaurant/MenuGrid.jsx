import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ComingSoonMenu from "./ComingSoonMenu";

export default function MenuGrid() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenu();
  }, []);

  async function loadMenu() {
    try {
      const { data: categoryData } = await supabase
        .from("food_categories")
        .select("*")
        .order("created_at");

      const { data: foodData } = await supabase
        .from("food_items")
        .select("*")
        .order("created_at");

      setCategories(categoryData || []);
      setFoods(foodData || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-white">
        Loading Menu...
      </div>
    );
  }

  if (categories.length === 0) {
    return <ComingSoonMenu />;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {categories.map((category) => {
        const categoryFoods = foods.filter(
          (food) => food.category_id === category.id
        );

        if (categoryFoods.length === 0) return null;

        return (
          <div key={category.id} className="mb-16">

            <h2 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {categoryFoods.map((food) => (
                <div
                  key={food.id}
                  className="bg-[#111] rounded-xl overflow-hidden border border-yellow-500/20 shadow-lg"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-white text-xl font-semibold text-center">
                      {food.name}
                    </h3>
                  </div>
                </div>
              ))}

            </div>

          </div>
        );
      })}

    </section>
  );
}