import { data } from "react-router-dom";
import axiosClient from "../axiosClient";

export const getInventory=async()=>{
    return await axiosClient.get('/Inventory');   
};

export const addorUpdateInventory=async(data:any)=>{
    return await axiosClient.post("Inventory",data);
};

export const deleteInventory=async( id: string)=>{
    return await axiosClient.delete(`/Inventory/${id}`)
}
export const getInventoryById = async (
  id: string
) => {
  return await axiosClient.get(
    `/Inventory/${id}`
  );
};