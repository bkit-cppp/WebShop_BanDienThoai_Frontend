import React, { useState } from "react";
export default function TrendyProducts()
{
  const [product,setProducts]=useState<any[]>([]);
  const loadProducts=async()=>{

  }
      const products = [
    { id: 1, name: "Colorful Stylish Shirt", image: "/img/product-1.jpg", price: "$123.00", oldPrice: "$123.00" },
    { id: 2, name: "Colorful Stylish Shirt", image: "/img/product-2.jpg", price: "$123.00", oldPrice: "$123.00" },
    { id: 3, name: "Colorful Stylish Shirt", image: "/img/product-3.jpg", price: "$123.00", oldPrice: "$123.00" },
    { id: 4, name: "Colorful Stylish Shirt", image: "/img/product-4.jpg", price: "$123.00", oldPrice: "$123.00" },
    { id: 5, name: "Colorful Stylish Shirt", image: "/img/product-5.jpg", price: "$123.00", oldPrice: "$123.00" },
    { id: 6, name: "Colorful Stylish Shirt", image: "/img/product-6.jpg", price: "$123.00", oldPrice: "$123.00" },
    { id: 7, name: "Colorful Stylish Shirt", image: "/img/product-7.jpg", price: "$123.00", oldPrice: "$123.00" },
    { id: 8, name: "Colorful Stylish Shirt", image: "/img/product-8.jpg", price: "$123.00", oldPrice: "$123.00" },
  ];

    return(
        <>
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Trandy Products</span>
        </h2>
      </div>

      <div className="row px-xl-5 pb-3">
        {products.map((product) => (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={product.id}>
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.name}</h6>

                <div className="d-flex justify-content-center">
                  <h6>{product.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del>{product.oldPrice}</del>
                  </h6>
                </div>
              </div>

              <div className="card-footer d-flex justify-content-between bg-light border">
                <a href="#" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"></i>
                  View Detail
                </a>

                <a href="#" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    );
}