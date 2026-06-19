import "../assets/Header.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* TOPBAR */}

      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
       <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark" href="">FAQs</a>
          <span className="text-muted px-2">|</span>
                   <a className="text-dark" href="">Help</a>
          <span className="text-muted px-2">|</span>
                   <a className="text-dark" href="">Support</a>
          <span className="text-muted px-2">|</span>
        </div>
       </div>
       <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
            <a className="text-dark px-2" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-dark pl-2" href="">
                        <i className="fab fa-youtube"></i>
                    </a>

        </div>
       </div>
        </div>

      </div>

      {/* HEADER */}

      <div className="header">
        {/* LOGO */}

        <div className="header-logo">
          <Link to="/">
            <h1>
              <span>K</span>
              Computer
            </h1>
          </Link>
        </div>

        {/* SEARCH */}

        <div className="header-search">
          <input
            type="text"
            placeholder="Search for products"
          />

          <button>
            <FaSearch />
          </button>
        </div>

        {/* ICON */}

        <div className="header-icons">
          <Link to="/wishlist" className="icon-btn">
            <FaHeart />

            <span>0</span>
          </Link>

          <Link to="/cart" className="icon-btn">
            <FaShoppingCart />

            <span>0</span>
          </Link>
        </div>
      </div>
    </>
  );
}