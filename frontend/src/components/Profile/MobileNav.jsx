import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const role = useSelector((state) => state.auth.role);
  return (
    <>
      {role === "user" && (
        <div className="w-full flex lg:hidden items-center justify-between mt-4">
          <Link
            to="/thong-tin-ca-nhan"
            className="text-zinc-100 font-semibold w-full text-center hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Yêu thích
          </Link>
          <Link
            to="/thong-tin-ca-nhan/lich-su-dat-hang"
            className="text-zinc-100 font-semibold w-full text-center hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Lịch sử đơn hàng
          </Link>
          <Link
            to="/thong-tin-ca-nhan/cai-dat"
            className="text-zinc-100 font-semibold w-full text-center hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Cài đặt
          </Link>
        </div>
      )}
      {role === "admin" && (
        <div className="w-full flex lg:hidden items-center justify-between mt-4">
          <Link
            to="/thong-tin-ca-nhan"
            className="text-zinc-100 font-semibold w-full text-center hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Tất cả đơn hàng
          </Link>
          <Link
            to="/thong-tin-ca-nhan/them-sach"
            className="text-zinc-100 font-semibold w-full text-center hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Thêm sách
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileNav;
