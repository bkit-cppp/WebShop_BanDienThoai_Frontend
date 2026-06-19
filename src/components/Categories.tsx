import React, { useEffect, useState } from "react";
import "../assets/style.css";
import "../assets/style.min.css";
import { getAllCategories } from "../api/CategoryApi";
export default function Categories(){
  const [categories,setCategories]=useState<any[]>([]);
  const loadCategories=async()=>{
    try{
     const response=await getAllCategories();
    setCategories(response.data.data??[]);
    console.log("Categories:",response.data);
    }catch(error)
    {
      console.log("Load categories failed", error);
    }
  }
  // useEffect(()=>{
  //   loadCategories();
  // },[]);
    return(
<>
  {/* Categories Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {categories.map((item)=>(
               <div className="col-lg-4 col-md-6 pb-1" key={item.categoryId}>
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}

            >
              <p className="text-right">{item.description}</p>
              <a href="#" className="cat-img position-relative overflow-hidden mb-3">
                <img className="img-fluid" src="/img/cat-1.jpg" alt="Men's dresses" />
              </a>
              <h5 className="font-weight-semi-bold m-0">{item.name}</h5>
            </div>
          </div>
          ))}
        </div>
      </div>
</>
    );
}