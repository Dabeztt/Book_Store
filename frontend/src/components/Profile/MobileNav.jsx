import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="w-full flex items-center justify-between my-4 md:hidden">
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
  );
};

export default MobileNav;
