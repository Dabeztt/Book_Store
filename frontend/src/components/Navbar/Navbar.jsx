import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Thông tin liên hệ",
      link: "/thong-tin-lien-he",
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
      <div className="flex items-center">
        <img
          className="h-10 me-4 filter invert"
          src="https://cdn-icons-png.flaticon.com/128/864/864685.png"
          alt="logo"
        />
        <h1 className="text-2xl font-semibold">BookStore</h1>
      </div>
      <div className="nav-links-bookstore flex items-center gap-4">
        <div className="flex gap-4">
          {links.map((items, i) => (
            <div
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {items.title}
              {""}
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex">
          <button className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Đăng nhập
          </button>
          <button className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
