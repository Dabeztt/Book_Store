import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sach" element={<AllBooks />} />
          <Route path="/gio-hang" element={<Cart />} />
          <Route path="/thong-tin-ca-nhan" element={<Profile />} />
          <Route path="/dang-nhap" element={<LogIn />} />
          <Route path="/dang-ky" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
