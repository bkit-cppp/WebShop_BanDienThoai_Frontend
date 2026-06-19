import { useNavigate, useNavigation } from "react-router-dom";
import "./DashboardAdmin.css";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaMoneyBillWave,
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

export default function Dashboard() {
        const nav=useNavigate();
  return (

    <div className="dashboard-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-section">
          <img src="/K-Logo.png" alt="logo" className="logo" />
          <h2>K-ADMIN</h2>
        </div>

        <ul className="menu">
          <li className="active">Màn hình chính</li>
          <li>Người dùng</li>
          <li onClick={()=>nav("product")}>Sản phẩm</li>
          <li onClick={()=>nav("discountcode")}>Mã giảm giá</li>
          <li onClick={()=>nav("category")}>Danh Mục</li>
          <li>Đơn Hàng</li>
          <li>Phân tích</li>
          <li>Cài đặt</li>
        </ul>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        {/* HEADER */}
        <header className="topbar">
          <div className="left-topbar">
            <FaBars className="menu-icon" />

            <div className="search-box">
              <FaSearch />
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="right-topbar">
            <FaBell className="icon" />
            <FaUserCircle className="avatar" />
          </div>
        </header>

        {/* PAGE TITLE */}
        <div className="page-title">
          <h1>Tổng quan trang quản lý</h1>
          <p>Welcome back Admin </p>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">
              <FaShoppingCart />
            </div>

            <div>
              <h3>1,240</h3>
              <p>Total Orders</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <FaMoneyBillWave />
            </div>

            <div>
              <h3>$28,500</h3>
              <p>Total Revenue</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <FaUsers />
            </div>

            <div>
              <h3>850</h3>
              <p>Customers</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <FaBoxOpen />
            </div>

            <div>
              <h3>120</h3>
              <p>Products</p>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="content-grid">
          {/* RECENT ORDERS */}
          <div className="table-card">
            <div className="card-header">
              <h2>Recent Orders</h2>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1021</td>
                  <td>Khai Le</td>
                  <td>
                    <span className="status completed">
                      Completed
                    </span>
                  </td>
                  <td>$250</td>
                </tr>

                <tr>
                  <td>#1022</td>
                  <td>Thanh Ha</td>
                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>
                  <td>$450</td>
                </tr>

                <tr>
                  <td>#1023</td>
                  <td>CodeAPI</td>
                  <td>
                    <span className="status cancelled">
                      Cancelled
                    </span>
                  </td>
                  <td>$120</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* USERS */}
          <div className="user-card">
            <div className="card-header">
              <h2>Khách Hàng Mới</h2>
            </div>

            <div className="user-item">
              <FaUserCircle className="user-avatar" />
              <div>
                <h4>LeBaKhai</h4>
                <p>Joined today</p>
              </div>
            </div>

            <div className="user-item">
              <FaUserCircle className="user-avatar" />
              <div>
                <h4>ThanhHa</h4>
                <p>Joined yesterday</p>
              </div>
            </div>

            <div className="user-item">
              <FaUserCircle className="user-avatar" />
              <div>
                <h4>FullStack Dev</h4>
                <p>Joined 2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}