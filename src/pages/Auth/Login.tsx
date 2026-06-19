import React, { useState } from "react";
import axiosClient from "../../axiosClient";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    userName: "",
    passWord: "",
  });

const [loading,setLoading]=useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axiosClient.post(
        "/users/login",
        data
      );
      console.log("LOGIN RESPONSE:", response.data);
      const accessToken = response.data?.data?.accessToken;
      const refreshToken=response.data?.data?.refreshToken;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken",refreshToken?? "");
      localStorage.setItem(
        "user",
        JSON.stringify({
          userName: data.userName,
        })
      );

      toast.success("Đăng nhập thành công");

      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    } catch (err: any) {
      console.error(err);

      const message =
        err?.response?.data?.message ||
        "Đăng nhập thất bại";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-container-center">
      <div className="left-box">
        <img
          src="K-Logo.png"
          className="brandLogo"
        />

        <h1>Nhập hội với các thành viên</h1>

        <h3>
          Để không bỏ lỡ các ưu đãi từ K-Computer
        </h3>

        <div className="benefit-box">
          <ul>
            <li>
              Chiết khấu đến 5% khi mua các sản phẩm
              mua tại K-Computer
            </li>

            <li>
              Miễn phí giao hàng cho thành viên
              KMEM, KVIP và cho đơn hàng từ
              300.000đ
            </li>

            <li>
              Tặng voucher sinh nhật đến
              500.000đ cho khách hàng thành viên
            </li>

            <li>
              Trợ giá thu cũ lên đời đến 1 triệu
            </li>

            <li>
              Thăng hạng nhận voucher đến
              300.000đ
            </li>
          </ul>

          <img
            src="K-Store-Logo.png"
            className="masCot"
          />
        </div>
      </div>

      <div className="right-box">
        <h1 className="title">Đăng Nhập</h1>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >
          <label>Tên Đăng Nhập</label>

          <input
            type="text"
            name="userName"
            className="userName"
            onChange={handleChange}
            placeholder="Nhập tên đăng nhập"
            required
          />

          <label>Mật Khẩu</label>

          <input
            type="password"
            name="passWord"
            className="passWord"
            onChange={handleChange}
            placeholder="Nhập Mật Khẩu"
            required
          />

          <button
            className="btn-login"
            disabled={loading}
          >
            {loading
              ? "Đang đăng nhập..."
              : "Đăng Nhập"}
          </button>

          <p className="register-text">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="red">
              Đăng ký ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}