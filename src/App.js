import React, { useEffect } from "react"
import { AuthProvider } from "./paths/components/logincomponents/context/AuthProvider";
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Home from "./paths/Home"
import Main from "./paths/Main"
import Signup from "./paths/Signup"
import Otp from "./paths/Otp"
import Username from "./paths/Username"
import Birthday from "./paths/Birthday"
import Faq from "./paths/components/homecomponents/Faq"
import About from "./paths/components/homecomponents/About"
import Contact from "./paths/components/homecomponents/Contact"
import Ourguarantee from "./paths/components/homecomponents/Ourguarantee"
import Login from "./paths/Login"
import Unauthorized from "./paths/unauthorized"
import Missing from "./paths/Missing"
import RequireAuth from "./paths/RequireAuth"
import FemalesProducts from "./paths/FemalesProducts"
import MalesProducts from "./paths/MalesProducts"
import ProductDescription from "./paths/ProductDescription"
import CheckOutForm from "./paths/CheckOutForm"
import Profile from "./paths/Profile"
import Dashboard from "./paths/components/DashboardSeller/Dashboard"
import SellerProfilePage from "./paths/components/DashboardSeller/SellerProfilePage"
import SellerProduct from "./paths/components/DashboardSeller/SellerProduct"
import SellerViewProduct from "./paths/components/DashboardSeller/SellerViewProduct"
import SellerOrders from "./paths/components/DashboardSeller/SellerOrders";
import SellerAbout from "./paths/components/DashboardSeller/SellerAbout";
import OrdersInfo from "./paths/components/DashboardSeller/OrdersInfo";
import TrackOrders from "./paths/components/productcomponents/TrackOrders";
import MyOrders from "./paths/components/productcomponents/MyOrders";
import MyWishlist from "./paths/components/productcomponents/myWishlist";
import SellerProductDescription from "./paths/components/DashboardSeller/SellerProductDescription";
export default function App() {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "./assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/*<Route path="/" element={<Protected Component={Home}/>} />*/}
          <Route path="/" element={<Home />} />
          {/*Home page component*/}
          <Route path="/About" element={<About />} />
          <Route path="/Ourquranartee" element={<Ourguarantee />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Main" element={<Main />} />
          {/*Authorized*/}
          <Route element={<RequireAuth />}>
            <Route path="/FProducts" element={<FemalesProducts />} />
            <Route path="/MProducts" element={<MalesProducts />} />
            <Route path="/:id" element={<ProductDescription />} />
            <Route path="/CheckOutForm" element={<CheckOutForm />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Dash" element={<Dashboard />} />
            <Route path="/Seller" element={<SellerProfilePage />} />
            <Route path="/SellerPro" element={<SellerProduct />} />
            <Route path="/SellerView" element={<SellerViewProduct />} />
            <Route path="/Sellerorder" element={<SellerOrders />} />
            <Route path="/Sellerabout" element={<SellerAbout />} />
            <Route path="/Ordersinfo" element={<OrdersInfo />} />
            <Route path="/Trackorders" element={<TrackOrders />} />
            <Route path="/Myorders" element={<MyOrders />} />
            <Route path="/Wishlist" element={<MyWishlist />} />
            <Route path="/SellerPD" element={<SellerProductDescription />} />
          </Route>

          {/*Login*/}
          <Route path="/Login" element={<Login />} />

          {/*signup*/}

          <Route path="/Signup" element={<Signup />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/Username" element={<Username />} />
          <Route path="/DateOfBirth" element={<Birthday />} />

          {/*error pages*/}

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}