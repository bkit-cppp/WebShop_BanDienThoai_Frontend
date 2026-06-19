import axiosClient from "../axiosClient";

export const getAllCategories=async()=>{
  return await axiosClient.get('/Categories');
}
export const getCategories = async (
  cursorId?: string,
  limit: number = 5
) => {
  const response = await axiosClient.get(
    `/Categories/PaginationCategory`,
    {
      params: {
        cursorId,
        limit,
      },
    }
  );

  return response.data;
};

export const addOrUpdateCategory = async (data: any) => {
  const response = await axiosClient.post(
    "/Categories/addOrUpdateCategory",
    data
  );

  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await axiosClient.delete(
    `/Categories/deleteCategory?Id=${id}`
  );

  return response.data;
};