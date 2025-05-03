import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Sách",
      link: "/sach",
    },
    {
      title: "Giỏ hàng",
      link: "/gio-hang",
    },
    {
      title: "Thông tin cá nhân",
      link: "/thong-tin-ca-nhan",
    },
  ];
  return (
    <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
      <Link to="/" className="flex items-center">
        <img
          className="h-10 me-4 filter invert"
          src="https://cdn-icons-png.flaticon.com/128/864/864685.png"
          alt="logo"
        />
        <h1 className="text-2xl font-semibold">BookStore</h1>
      </Link>
      <div className="nav-links-bookstore flex items-center gap-4">
        <div className="flex gap-4">
          {links.map((items, i) => (
            <Link
              to={items.link}
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {items.title}
              {""}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 flex">
          <Link
            to="/dang-nhap"
            className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
          >
            Đăng nhập
          </Link>
          <Link
            to="/dang-ky"
            className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
