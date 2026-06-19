import { data } from "react-router-dom";
import axiosClient from "../axiosClient";

export const getDisCountCodes=async (
data:any
)=>{
    const response=await axiosClient.get(`/DisCountCodes`,
   data);
    return response.data;
}

export const addOrUpdateDiscountCode=async(data:any)=>{
    const response=await axiosClient.post("/DisCountCodes/addOrUpdateDisCountCode",data);
    return response.data;
}

export const deleteDiscountCode=async(id:string)=>{
    const response=await axiosClient.delete(`/DisCountCodes/deleteDisCountCode?Id=${id}`);
    return response.data;
}