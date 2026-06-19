import { useEffect, useState } from "react";
import {
  addOrUpdateCategory,
  deleteCategory,
  getCategories,
} from "../../../api/CategoryApi";

import "../../../assets/category.css";

import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import CategoryPagination from "./CategoryPagination";

import { toast } from "react-toastify";

export default function CategoryPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [cursorId, setCursorId] = useState<
    string | undefined
  >();
  const [hasNextPage, setHasNextPage] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<any>(null);

  const loadCategories = async (
    nextCursor?: string
  ) => {
    try {
      const response = await getCategories(
        nextCursor
      );

      setCategories((prev) => [
        ...prev,
        ...response.data.data,
      ]);

      setHasNextPage(
        response.data.hasNextPage
      );

      setCursorId(response.data.next);
    } catch (error) {
      toast.error("Load category failed");
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async (data: any) => {
    try {
      await addOrUpdateCategory(data);

      toast.success("Success");

      setCategories([]);
      loadCategories();

      setSelectedCategory(null);
    } catch {
      toast.error("Error");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteCategory(id);

      toast.success("Deleted");

      setCategories([]);
      loadCategories();
    } catch {
      toast.error("Xóa Thất Bại");
    }
  };

  const handleEdit = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Quản Lý danh mục</h1>
      </div>

      <div className="category-grid">
        <CategoryForm
          selectedCategory={selectedCategory}
          onSubmit={handleSubmit}
        />

        <div className="category-content">
          <CategoryTable
            categories={categories}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

          <CategoryPagination
            hasNextPage={hasNextPage}
            onNext={() =>
              loadCategories(cursorId)
            }
          />
        </div>
      </div>
    </div>
  );
}