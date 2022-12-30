import { Route, Routes } from "react-router-dom";
import React from "react";
import Admin from "../Screens/admin";
import AdminLogin from "../Screens/admin/adminLogin/AdminLogin";
import AdminHome from "../Screens/admin/adminHome/AdminHome";
import AdminProductList from "../Screens/admin/productl-list/productList";
import AddProduct from "../Screens/addProduct/AddProduct";
import CategoryList from "../Screens/admin/categoryList/CategoryList";
import RiderList from "../Screens/admin/riders/RiderList";
import OrderList from "../Screens/admin/orders/OrderList";
import OrderDetails from "../Screens/admin/orders/OrderDetails";

const AdminRoutes = () => {
    return (
        <div className="mt-1 mt-lg-4">
            <Routes>
            {/* <Route path='/admin' element={<Admin />} /> */}
            <Route path='/' element={<AdminHome />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path="/all-category" element={<CategoryList />} />
            <Route path='/admin-ProductList' element={<AdminProductList />} />
            <Route path='/admin-AddProduct' element={<AddProduct />} />
            <Route path='/all-riders' element={<RiderList />} />
            <Route path='/all-orders' element={<OrderList />} />
            <Route path='/orderDetails' element={<OrderDetails />} />
            <Route
                path='*'
                element={
                    <div className='col-12  d-flex'>
                        <img src='/4041.png' className='img-fluid col-10 col-md-4  m-auto' />
                    </div>
                }
            />
        </Routes>
        </div>
    )
}

export default AdminRoutes;