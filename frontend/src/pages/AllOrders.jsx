import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { FaCheck, FaUserLarge } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SeeUserData from "./SeeUserData";

const AllOrders = () => {
  const [Values, setValues] = useState({ status: "" });
  const [AllOrders, setAllOrders] = useState();
  const [Options, setOptions] = useState(-1);
  const [userDiv, setuserDiv] = useState("hidden");
  const [userDivData, setuserDivData] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://book-store-yacq.onrender.com/api/v1/xem-tat-ca-don",
        { headers }
      );
      setAllOrders(response.data.data);
    };
    fetch();
  }, [AllOrders]);

  const change = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };

  const submitChanges = async (i) => {
    const id = AllOrders[i]._id;
    const response = await axios.put(
      `https://book-store-yacq.onrender.com/api/v1/cap-nhat-don-hang/${id}`,
      Values,
      { headers }
    );
    alert(response.data.message);
  };

  AllOrders && AllOrders.splice(AllOrders.length - 1, 1);
  return (
    <>
      {!AllOrders && (
        <div className="h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      )}

      {AllOrders && AllOrders.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            Tất cả đơn hàng
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Stt</h1>
            </div>
            <div className="w-[40%] md:w-[22%]">
              <h1 className="">Sách</h1>
            </div>
            <div className="w-0 md:w-[45%] hidden md:block">
              <h1 className="">Mô tả</h1>
            </div>
            <div className="w-[17%] md:w-[9%]">
              <h1 className="">Giá</h1>
            </div>
            <div className="w-[30%] md:w-[16%]">
              <h1 className="">Trạng thái</h1>
            </div>
            <div className="w-[10%] md:w-[5%]">
              <h1 className="">
                <FaUserLarge />
              </h1>
            </div>
          </div>
          {AllOrders &&
            AllOrders.map((items, i) => (
              <div className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-300">
                <div className="w-[3%]">
                  <h1 className="text-center">{i + 1}</h1>
                </div>
                <div className="w-[40%] md:w-[22%]">
                  <Link
                    to={`/chi-tiet-sach/${items.book._id}`}
                    className="hover:text-blue-300"
                  >
                    {items.book.title}
                  </Link>
                </div>
                <div className="w-0 md:w-[45%] hidden md:block">
                  <h1 className="">{items.book.desc.slice(0, 50)}...</h1>
                </div>
                <div className="w-[17%] md:w-[9%]">
                  <h1 className="">
                    {Number(items.book.price).toLocaleString("vi-VN")} VNĐ
                  </h1>
                </div>
                <div className="w-[30%] md:w-[16%]">
                  <h1 className="font-semibold">
                    <button
                      className="hover:scale-105 transition-all duration-300"
                      onClick={() => setOptions(i)}
                    >
                      {items.status === "Đã đặt" ? (
                        <div className="text-yellow-500">{items.status}</div>
                      ) : items.status === "Đã hủy" ? (
                        <div className="text-red-500">{items.status}</div>
                      ) : (
                        <div className="text-green-500">{items.status}</div>
                      )}
                    </button>
                    <div
                      className={`${
                        Options === i ? "flex" : "hidden"
                      } flex mt-4`}
                    >
                      <select
                        name="status"
                        id=""
                        className="bg-gray-800"
                        onChange={change}
                        value={Values.status}
                      >
                        {["Đã đặt", "Đang giao", "Đã giao", "Đã hủy"].map(
                          (items, i) => (
                            <option value={items} key={i}>
                              {items}
                            </option>
                          )
                        )}
                      </select>
                      <button
                        className="text-green-500 hover:text-pink-600 mx-2"
                        onClick={() => {
                          setOptions(-1);
                          submitChanges(i);
                        }}
                      >
                        <FaCheck />
                      </button>{" "}
                    </div>
                  </h1>
                </div>
                <div className="w-[10%] md:w-[5%]">
                  <button
                    className="text-xl hover:text-orange-500"
                    onClick={() => {
                      setuserDiv("fixed");
                      setuserDivData(items.user);
                    }}
                  >
                    <IoOpenOutline />
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
      {userDivData && (
        <SeeUserData
          userDivData={userDivData}
          userDiv={userDiv}
          setuserDiv={setuserDiv}
        />
      )}
    </>
  );
};

export default AllOrders;
