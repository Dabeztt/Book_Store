import React, { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import Favourites from "./components/Profile/Favourites";
import UserOrderHistory from "./components/Profile/UserOrderHistory";
import Settings from "./components/Profile/Settings";
import AllOrders from "./pages/AllOrders";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  });
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sach" element={<AllBooks />} />
        <Route path="/gio-hang" element={<Cart />} />
        <Route path="/thong-tin-ca-nhan" element={<Profile />}>
          {role === "user" ? (
            <Route index element={<Favourites />} />
          ) : (
            <Route index element={<AllOrders />} />
          )}
          {role === "admin" && (
            <Route path="/thong-tin-ca-nhan/them-sach" element={<AddBook />} />
          )}
          <Route
            path="/thong-tin-ca-nhan/lich-su-dat-hang"
            element={<UserOrderHistory />}
          />
          <Route path="/thong-tin-ca-nhan/cai-dat" element={<Settings />} />
        </Route>
        <Route path="/dang-nhap" element={<LogIn />} />
        <Route path="/dang-ky" element={<SignUp />} />
        <Route path="/cap-nhat-sach/:id" element={<UpdateBook />} />
        <Route path="/chi-tiet-sach/:id" element={<ViewBookDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
