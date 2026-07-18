import { useEffect, useState } from "react";

export default function CategoryForm({
  addCategory,
  updateCategory,
  editingCategory,
  cancelEdit,
}) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editingCategory) {
      setName(editingCategory.name);
    } else {
      setName("");
    }
  }, [editingCategory]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter category name.");
      return;
    }

    if (editingCategory) {
      await updateCategory(editingCategory.id, name);
    } else {
      await addCategory(name);
    }

    setName("");
  }

  return (
    <div className="bg-[#161616] rounded-xl p-6 border border-yellow-500/20 mb-8">

      <h2 className="text-2xl font-bold text-yellow-400 mb-5">
        {editingCategory ? "Edit Category" : "Add New Category"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex gap-4"
      >
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 bg-[#0B0B0B] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-500"
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 rounded-lg transition"
        >
          {editingCategory ? "Update" : "Add"}
        </button>

        {editingCategory && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 rounded-lg transition"
          >
            Cancel
          </button>
        )}
      </form>

    </div>
  );
}