import React, { useState } from "react";
import axiosClient from "../../axiosClient";
import {toast} from "react-toastify"; 
import {Link, useNavigate} from 'react-router-dom';
export default function Register()
{
    const navigate=useNavigate();
    const[data, setData]=useState({
            userName:"",
            email:"",
            address:"",                  
            password:"",
          
    });
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleRegister= async(e:React.FormEvent<HTMLElement>)=>{
        e.preventDefault();
        try{
            await axiosClient.post('/users/register', data)
           toast.success("Đăng Ký Thành Công");
          setTimeout(() => {
             navigate('/login');
          }, 2000);
       
        }catch(err)
        {
          toast.error("Đăng Ký Thất Bại");
        }
    };
    return(
      <div className="user-container-center">
        <div className="left-box">
          <img src="K-Logo.png" className="brandLogo"></img>
          <h1>Nhập hội khách hàng thành viên KMEMBER</h1>
          <h3> Để không bỏ lỡ các ưu đãi từ K-Computer</h3>
          <div className="benefit-box">
            <ul>
              <li>Chiết khấu đến 5% khi mua các sản phẩm mua tại K-Computer</li>
              <li>Miễn phí giao hàng cho thành viên KMEM, KVIP và cho đơn hàng từ 300.000đ</li>
              <li>Tặng voucher sinh nhật đến 500.000đ cho khách hàng thành viên</li>
              <li>Trợ giá thu cũ lên đời đến 1 triệu</li>
              <li>Thăng hạng nhận voucher đến 300.000đ</li>
            </ul>
            <img src="K-Store-Logo.png" className="masCot"></img>
          </div>
        </div>
        <div className="right-box">
            <h1 className="title">Đăng Ký Member</h1>
             <form className="user-form" onSubmit={handleRegister} >
              <label>Họ và Tên</label>
              <input type="text" name="userName" className="userName" onChange={handleChange} placeholder="Vui lòng nhập tên đăng nhâp"></input>
              <label>Email</label>
             <input type="email" name= "email" className="email" onChange={handleChange} placeholder="Vui lòng nhập Email" required/>
              <label>Address</label>
             <input type="text"  name= "address" className="address" onChange={handleChange} placeholder="Vui lòng nhập địa chỉ" required/>
              <label>Mật Khẩu</label>
             <input type="password" name= "password" className="password" onChange={handleChange} required/>
             <button type="submit" className="btn-register">Đăng Ký</button>
             <p className="register-text">
              Bạn đã có tài khoản?{""}
              <Link to="/login" className="red">
              Đăng nhập ngay
              </Link>
             </p>
             </form>
        </div>
      </div>
    );

}