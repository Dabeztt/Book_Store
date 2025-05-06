import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="h-auto bg-zinc-900 px-12 py-28 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Đăng nhập</p>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Tài khoản
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="tài khoản"
            name="username"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Mật khẩu
          </label>
          <input
            type="password"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="mật khẩu"
            name="password"
            required
          />
        </div>
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">
            Đăng nhập
          </button>
        </div>
        <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
          Hoặc
        </p>
        <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
          Chưa có tài khoản? &nbsp;
          <Link to="/dang-nhap" className="hover:text-blue-500">
            <u>Đăng ký</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
