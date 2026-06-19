import axiosClient from "../axiosClient";
export const uploadProductImage=(
    productId:string,
    file: File,
    isMain:boolean=true
)=>{
   const formData= new FormData();
   formData.append("file",file);
   formData.append("isMain",String(isMain));
   return axiosClient.post(
    `/ProductImages/${productId}`, formData,{
          headers: {
        "Content-Type": "multipart/form-data",
      },
    }
   );
}