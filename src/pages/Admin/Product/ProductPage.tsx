import { useEffect, useState } from "react";

import {
  addorUpdateProduct,
  deleteProduct,
  getProducts,
} from "../../../api/ProductApi";
import { getCategories } from "../../../api/CategoryApi";

import "../../../assets/category.css";

import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import ProductPagination from "./ProductPagination";
import { uploadProductImage } from "../../../api/ProductImageApi";
import { toast } from "react-toastify";

export default function ProductPage() {
const[products,setProducts]=useState<any[]>([]);

  const [selectedProduct, setSelectedProduct] =
    useState<any>(null);
    const [categories, setCategories] =
  useState<any[]>([]);

   const loadCategories=async()=>{
    try{
        const response=await getCategories();
        setCategories(response.data.data);
    }catch{
        toast.error(
        "Load categories failed"
      );
    }
   };
  const loadProducts = async () => {
    try {
      const response =
        await getProducts();

      setProducts(response.data.data);
    } catch {
      toast.error(
        "Load products failed"
      );
    }
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

const handleSubmit = async (data: any) => {
  try {
    const productData = {
      productId: data.productId,
      name: data.name,
      description: data.description,
      price: Number(data.price),
      pictureUrl: data.pictureUrl,
      type: data.type,
      brand: data.brand,
      quantityStock: Number(data.quantityStock),
      categoryId: data.categoryId,
    };

    const productResponse = await addorUpdateProduct(productData);

    const productId =
      productResponse.data.data?.productId ||
      data.productId;

    if (data.imageFile && productId) {
      await uploadProductImage(
        productId,
        data.imageFile,
        true
      );
    }

    toast.success("Thành công");
    await loadProducts();
    setSelectedProduct(null);
  } catch (error) {
    console.log(error);
    toast.error("Error");
  }
};

  const handleDelete = async (
    id: string
  ) => {
    try {
      await deleteProduct(id);

      toast.success("đã xóa");

      loadProducts();
    } catch {
      toast.error(
        "Xóa thất bại"
      );
    }
  };

  const handleEdit = (
    product: any
  ) => {
    setSelectedProduct(product);
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Quản Lý Sản Phẩm</h1>
      </div>

      <div className="category-grid">
        <ProductForm
          selectedProduct={
            selectedProduct
          }
          categories={categories}
          onSubmit={handleSubmit}
        />

        <div className="category-content">
          <ProductTable
            products={products}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

          <ProductPagination
            hasNextPage={false}
            onNext={() => {}}
          />
        </div>
      </div>
    </div>
  );
}