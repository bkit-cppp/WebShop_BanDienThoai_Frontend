import axiosClient from "../axiosClient";

export const getProducts = async () => {
  return await axiosClient.get(
    "/Products"
  );
};

export const addorUpdateProduct = async (
  data: any
) => {
  return await axiosClient.post(
    "/Products",
    data
  );
};

export const deleteProduct = async (
  id: string
) => {
  return await axiosClient.delete(
    `/Products/${id}`
  );
};

export const getProductById = async (
  id: string
) => {
  return await axiosClient.get(
    `/Products/${id}`
  );
};

export const getProductByName = async (
  name: string
) => {
  return await axiosClient.get(
    `/Products/by-name?name=${name}`
  );
};