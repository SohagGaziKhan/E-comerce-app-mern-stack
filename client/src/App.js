import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Services from "./pages/Services";
// import Profile from "./pages/Profile";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoutes from "./components/Routes/AdminRoutes";
import AllProducts from "./pages/Admin/AllProducts";
import AddProduct from "./pages/Admin/AddProduct";
import Coupon from "./pages/Admin/Coupon";
import Orders from "./pages/Admin/Orders";
import Categories from "./pages/Admin/Categories";
import Brand from "./pages/Admin/Brand";
import AllUser from "./pages/Admin/AllUser";
import AdminAccount from "./pages/Admin/AdminAccount";
import UserAccount from "./pages/user/UserAccount";
import ProfileContent from "./pages/ProfileContent";
import AdminUpdateProducts from "./components/admin/AdminUpdateProducts";
import AdminOfferPages from "./pages/Admin/AdminOfferPages";
import AdminAllOffers from "./pages/Admin/AdminAllOffers";
import AdminOffersUpdate from "./components/admin/AdminOffersUpdate";
import FromSearch from "./components/FromSearch";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import UserOrder from "./pages/user/UserOrder";
import ProductDetailsOffers from "./components/ProductDetailsOffers";

// import AdminUpdateCategory from "./pages/Admin/AdminUpdateCategory";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<FromSearch />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/product/offer/:slug" element={<ProductDetailsOffers />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/all-order" element={<UserOrder />} />
          <Route path="user/my-account" element={<UserAccount />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoutes />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/my-account" element={<AdminAccount />} />
          <Route path="admin/all-products" element={<AllProducts />} />
          <Route
            path="admin/update-product/:slug"
            element={<AdminUpdateProducts />}
          />
          <Route path="admin/all-user" element={<AllUser />} />
          <Route path="admin/create-product" element={<AddProduct />} />
          <Route path="admin/create-coupon" element={<Coupon />} />
          <Route path="admin/create-offer" element={<AdminOfferPages />} />
          <Route
            path="admin/update-offers-product/:slug"
            element={<AdminOffersUpdate />}
          />
          <Route path="admin/all-offers" element={<AdminAllOffers />} />
          <Route path="admin/create-coupon" element={<Coupon />} />
          <Route path="admin/all-order" element={<Orders />} />
          <Route path="admin/create-categories" element={<Categories />} />
          <Route path="admin/create-brand" element={<Brand />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileContent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
