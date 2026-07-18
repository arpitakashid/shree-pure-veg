import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

import CategoryForm from "../../components/admin/CategoryForm";
import CategoryCard from "../../components/admin/CategoryCard";

export default function FoodManagement() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);

  const [editingCategory, setEditingCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const [loadingFood, setLoadingFood] = useState(false);

  useEffect(() => {
    loadCategories();
    loadFoods();
  }, []);

  async function loadCategories() {
    const { data, error } = await supabase
      .from("food_categories")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setCategories(data || []);
  }

  async function loadFoods() {
    const { data, error } = await supabase
      .from("food_items")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setFoods(data || []);
  }

  async function addCategory(name) {
    const { error } = await supabase
      .from("food_categories")
      .insert([
        {
          name,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Category Added Successfully");

    await loadCategories();
  }

  async function updateCategory(id, name) {
    const { error } = await supabase
      .from("food_categories")
      .update({
        name,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Category Updated");

    setEditingCategory(null);

    await loadCategories();
  }

  async function deleteCategory(id) {
    const confirmDelete = window.confirm(
      "Delete this category?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("food_categories")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Category Deleted");

    await loadCategories();
    await loadFoods();
  }

  async function addFood(categoryId, name, imageFile) {
    try {
      setLoadingFood(true);

      const fileName = `${Date.now()}-${imageFile.name}`;

      const { error: uploadError } =
        await supabase.storage
          .from("food")
          .upload(fileName, imageFile);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("food")
        .getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      const { error } = await supabase
        .from("food_items")
        .insert([
          {
            category_id: categoryId,
            name,
            image: imageUrl,
          },
        ]);

      if (error) throw error;

      await loadFoods();

      alert("Food Added Successfully");
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoadingFood(false);
    }
  }
    async function deleteFood(id) {
    const confirmDelete = window.confirm(
      "Delete this food item?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("food_items")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Food Deleted Successfully");

    await loadFoods();
  }

  function cancelEdit() {
    setEditingCategory(null);
  }

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold text-white mb-8">
        Food Management
      </h1>

      <CategoryForm
        addCategory={addCategory}
        updateCategory={updateCategory}
        editingCategory={editingCategory}
        cancelEdit={cancelEdit}
      />

      <h2 className="text-3xl text-yellow-400 mb-6">
        Food Categories
      </h2>

      {categories.length === 0 ? (
        <p className="text-gray-400">
          No categories found.
        </p>
      ) : (
        <div className="space-y-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              expandedCategory={expandedCategory}
              setExpandedCategory={setExpandedCategory}
              onEdit={setEditingCategory}
              onDelete={deleteCategory}
              addFood={addFood}
              foods={foods}
              deleteFood={deleteFood}
            />
          ))}
        </div>
      )}

      {loadingFood && (
        <div className="mt-6 text-yellow-400 font-medium">
          Uploading food...
        </div>
      )}

    </div>
  );
}