import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

const UserOrderHistory = () => {
  const [OrderHistory, setOrderHistory] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://book-store-yacq.onrender.com/api/v1/lich-su-don-hang",
        { headers }
      );
      setOrderHistory(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {!OrderHistory && (
        <div className="flex items-center justify-center h-[100%]">
          <Loader />
        </div>
      )}
      {OrderHistory && OrderHistory.length === 0 && (
        <div className="h-[80vh] p-4 text-zinc-100">
          <div className="h-[100%] flex flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
              Không có đơn hàng
            </h1>
            <img src="/no-order.png" alt="no order" className="h-[20vh] mb-8" />
          </div>
        </div>
      )}
      {OrderHistory && OrderHistory.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            Các đơn hàng của bạn
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Stt</h1>
            </div>
            <div className="w-[22%]">
              <h1 className="">Sách</h1>
            </div>
            <div className="w-[45%]">
              <h1 className="">Mô tả</h1>
            </div>
            <div className="w-[9%]">
              <h1 className="">Giá</h1>
            </div>
            <div className="w-[16%]">
              <h1 className="">Trạng thái</h1>
            </div>
            <div className="w-none md:w-[5%] hidden md:block">
              <h1 className="">Phương thức</h1>
            </div>
          </div>
          {OrderHistory.map((items, i) => (
            <div className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-300">
              <div className="w-[3%]">
                <h1 className="text-center">{i + 1}</h1>
              </div>
              <div className="w-[22%]">
                <Link
                  to={`/chi-tiet-sach/${items.book._id}`}
                  className="hover:text-blue-300"
                >
                  {items.book.title}
                </Link>
              </div>
              <div className="w-[45%]">
                <h1 className="">{items.book.desc.slice(0, 50)}...</h1>
              </div>
              <div className="w-[9%]">
                <h1 className="">
                  {Number(items.book.price).toLocaleString("vi-VN")} VNĐ
                </h1>
              </div>
              <div className="w-[16%]">
                <h1 className="font-semibold text-green-500">
                  {items.status === "Đã đặt" ? (
                    <div className="text-yellow-500">{items.status}</div>
                  ) : items.status === "Đã hủy" ? (
                    <div className="text-red-500">{items.status}</div>
                  ) : (
                    items.status
                  )}
                </h1>
              </div>
              <div className="w-none md:w-[5%] hidden md:block">
                <h1 className="test-sm text-zinc-400">COD</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserOrderHistory;
