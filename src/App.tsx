import { useEffect, useState } from 'react'
import {toast} from "react-toastify"; 
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Register from './pages/Auth/Register';
import DashboardAdmin from "./pages/Admin/DashBoardAdmin";
import CategoryPage from "./pages/Admin/Category/CategoryPage";
import ProductPage from './pages/Admin/Product/ProductPage';
import DiscountcodePage from './pages/Admin/Discountcode/DiscountcodePage';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './assets/user.css'
import Login from './pages/Auth/Login'
import HomePage from './pages/Home/HomePage';
import"./assets/style.css";
import "./assets/style.min.css";
function App() {
  return(
  <BrowserRouter>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />

  <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login/>}/>
 <Route path="/admin" element={<DashboardAdmin/>}/>
<Route path="/admin/product" element={<ProductPage/>}/>
 <Route path="/admin/category" element={<CategoryPage/>}/>
 <Route path="/admin/discountcode" element={<DiscountcodePage/>}/>
 <Route path="/" element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
  );
  // useEffect(()=>{
  //   fetch('https://localhost:7044/api/Categories')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log("API Data:", data);
  //     setCategories(data.data);
  //   }).catch((err)=>console.log(err));
  // })  

  // const [categories, setCategories] = useState<{name:string,description:string}[]>([]);
  // const addCategories=()=>{
  //   setCategories(prevState=>[...prevState,{name:'categories'+(prevState.length+1), description:'description' }])
  // }
  

  // return (
  //   <>
  //    <div>
  //     <h1 style={{color:'red'}}>Web Bán Máy Tính</h1>
  //     <ul>
  //       {categories.map((item, index)=>
  //       <li key={index}>{item.name}-{item.description}</li>
  //       )}
  //       <li onClick={addCategories}> Click Here</li>
  //     </ul>
  //    </div>
  //   </>
  // )
}

export default App
