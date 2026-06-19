import { useEffect, useState } from "react";
import {
  addOrUpdateDiscountCode,
  deleteDiscountCode,
  getDisCountCodes,
} from "../../../api/DisCountCodeApi";

import "../../../assets/category.css";

import DiscountcodeForm from "./DiscountcodeForm";
import DiscountcodeTable from "./DiscountcodeTable";
//import CategoryPagination from "./CategoryPagination";

import { toast } from "react-toastify";
import DiscountcodePagination from "./DiscountcodePagination";
import { data } from "react-router-dom";

export default function DiscountcodePage() {
  const [discountCodes, setDisCountCodes] = useState<any[]>([]);
  const [cursorId, setCursorId] = useState<
    string | undefined
  >();
  const [hasNextPage, setHasNextPage] =
    useState(false);

  const [selectedDisCountCodes, setSelectedDiscountCodes] =
    useState<any>(null);
/*const loadCategories=async()=>{
    try{
        const response=await getCategories();
        setCategories(response.data.data);
    }catch{
        toast.error(
        "Load categories failed"
      );
    }
   }; */
  // const loadDiscountCodes = async (
  //   nextCursor?: string
  // ) => {
  //   try {
  //     const response = await getDisCountCodes(
  //       nextCursor
  //     );

  //     setDisCountCodes((prev) => [
  //       ...prev,
  //       ...response.data.data,
  //     ]);

  //     setHasNextPage(
  //       response.data.hasNextPage
  //     );

  //     setCursorId(response.data.next);
  //   } catch (error) {
  //     toast.error("Tải danh mục thất bại");
  //   }
  // };
 const loadDiscountCodes=async()=>{
    try{
     const response=await getDisCountCodes(data);
     setDisCountCodes(response.data.data);
    }catch{
        toast.error(
        "Load  failed"
      );
    }
 };
  useEffect(() => {
    loadDiscountCodes();
  }, []);

  const handleSubmit = async (data: any) => {
    try {
      await addOrUpdateDiscountCode(data);
      toast.success("Success");
      setDisCountCodes([]);
      loadDiscountCodes();
      setSelectedDiscountCodes(null);
    } catch {
      toast.error("Error");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDiscountCode(id);

      toast.success("Deleted");

       setDisCountCodes([]);
       loadDiscountCodes();
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleEdit = (category: any) => {
    setDisCountCodes(category);
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Quản Lý Mã Giảm Giá</h1>
      </div>

      <div className="category-grid">
        <DiscountcodeForm
          selectedDisCountCode={selectedDisCountCodes}
          onSubmit={handleSubmit}
        />

        <div className="category-content">
          <DiscountcodeTable
            discountcodes={discountCodes}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

          <DiscountcodePagination
            hasNextPage={hasNextPage}
            onNext={() =>
              loadDiscountCodes()
            }
          />
        </div>
      </div>
    </div>
  );
}