import { useEffect, useState } from "react";

interface Props {
  selectedCategory: any;
  onSubmit: (data: any) => void;
}

export default function CategoryForm({
  selectedCategory,
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    categoryId: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    if (selectedCategory) {
      setForm({
        categoryId: selectedCategory.categoryId,
        name: selectedCategory.name,
        description: selectedCategory.description,
      });
    }
  }, [selectedCategory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);

    setForm({
      categoryId: "",
      name: "",
      description: "",
    });
  };

  return (
    <form className="category-form" onSubmit={submit}>
      <h2>
        {form.categoryId
          ? "Update Category"
          : "Create Category"}
      </h2>

      <input type="text" name="name"
        placeholder="Category Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {form.categoryId ? "Update" : "Create"}
      </button>
    </form>
  );
}