import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center">
      <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          Khơi Nguồn Tri Thức – Mỗi Cuốn Sách Là Một Hành Trình
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
          Khám phá hàng ngàn đầu sách từ mọi thể loại. Giao hàng nhanh, giá ưu
          đãi, đồng hành cùng bạn trên con đường chinh phục tri thức.
        </p>
        <div className="mt-8">
          <Link
            to="/sach"
            className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full"
          >
            Khám phá ngay
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
        <img src="./hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
