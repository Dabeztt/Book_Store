import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import axios from "axios";

const LogIn = () => {
  const [Values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (Values.username === "" || Values.password === "") {
        alert("Không được bỏ trống thông tin");
      } else {
        const response = await axios.post(
          "https://book-store-3gd4.onrender.com/api/v1/dang-nhap",
          Values
        );
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/thong-tin-ca-nhan");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="h-screen bg-zinc-900 px-12 py-8 flex items-center justify-center">
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
            value={Values.username}
            onChange={change}
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
            value={Values.password}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300"
            onClick={submit}
          >
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
