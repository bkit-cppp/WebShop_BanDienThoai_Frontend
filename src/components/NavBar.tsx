import React, { useEffect, useState } from "react";
import "../assets/style.css";
import "../assets/style.min.css";
import "../api/CategoryApi";
import { getAllCategories } from "../api/CategoryApi";
import Categories from "./Categories";
import { Link } from "react-router-dom";
export default function NavBar() {
  const[getCategories,setCategories]=useState<any[]>([]);
  const loadCategories=async()=>{
   try{
     const response=await getAllCategories();
     setCategories(response.data.data??[]);
     console.log("Categories", response.data);
   }catch(error){
     console.log("Load Categories failed", error);
   }
  }
  // useEffect(()=>{
  //  loadCategories();
  // },[]);
  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        {/* Categories Sidebar */}
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-bs-toggle="collapse"
            href="#navbar-vertical"
            style={{
              height: "65px",
              marginTop: "-1px",
              padding: "0 30px",
            }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>

          <nav
            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              {getCategories.map((item)=>(
                <Link key={item.categoryId}
                  to={`/shop?categoryId=${item.categoryId}`}
                  className="nav-item nav-link">
                    {item.name}
                </Link>
              ))}
              {/* <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Dresses
                </a>

                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  <a href="#" className="dropdown-item">
                    Men's Dresses
                  </a>
                  <a href="#" className="dropdown-item">
                    Women's Dresses
                  </a>
                  <a href="#" className="dropdown-item">
                    Baby's Dresses
                  </a>
                </div>
              </div> */}

              {/* <a href="#" className="nav-item nav-link">Shirts</a>
              <a href="#" className="nav-item nav-link">Jeans</a>
              <a href="#" className="nav-item nav-link">Swimwear</a>
              <a href="#" className="nav-item nav-link">Sleepwear</a>
              <a href="#" className="nav-item nav-link">Sportswear</a>
              <a href="#" className="nav-item nav-link">Jumpsuits</a>
              <a href="#" className="nav-item nav-link">Blazers</a>
              <a href="#" className="nav-item nav-link">Jackets</a>
              <a href="#" className="nav-item nav-link">Shoes</a> */}
            </div>
          </nav>
        </div>

        {/* Navbar + Carousel */}
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="#" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>

            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#" className="nav-item nav-link">Shop</a>
                <a href="#" className="nav-item nav-link">Shop Detail</a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>

                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="#" className="dropdown-item">Shopping Cart</a>
                    <a href="#" className="dropdown-item">Checkout</a>
                  </div>
                </div>

                <a href="#" className="nav-item nav-link">Contact</a>
              </div>

              <div className="navbar-nav ml-auto py-0">
                <Link to="/login" className="nav-item nav-link">Login</Link>
                <Link to="/register" className="nav-item nav-link">Register</Link>
              </div>
            </div>
          </nav>

          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "410px" }}>
                <img
                  className="img-fluid"
                  src="/img/carousel-1.jpg"
                  alt="carousel 1"
                />

                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      Fashionable Dress
                    </h3>
                    <a href="#" className="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item" style={{ height: "410px" }}>
                <img
                  className="img-fluid"
                  src="/img/carousel-2.jpg"
                  alt="carousel 2"
                />

                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      Reasonable Price
                    </h3>
                    <a href="#" className="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                <span className="carousel-control-prev-icon mb-n2"></span>
              </div>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                <span className="carousel-control-next-icon mb-n2"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}