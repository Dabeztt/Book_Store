import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data, favourite }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };

  const handleRemoveBook = async () => {
    const response = await axios.put(
      "https://book-store-3gd4.onrender.com/api/v1/xoa-khoi-yeu-thich",
      {},
      { headers }
    );
    alert(response.data.message);
  };
  return (
    <div className="bg-zinc-800 rounded p-4 flex flex-col">
      <Link to={`/chi-tiet-sach/${data._id}`}>
        <div className="">
          <div className="bg-zinc-900 rounded flex items-center justify-center">
            <img src={data.url} alt="/" className="h-[25vh]" />
          </div>
          <h2 className="mt-4 text-xl text-white font-semibold">
            {data.title}
          </h2>
          <p className="mt-2 text-zinc-400 font-semibold">Bởi {data.author}</p>
          <p className="mt-2 text-zinc-200 font-semibold text-xl">
            {Number(data.price).toLocaleString("vi-VN")} VNĐ
          </p>
        </div>
      </Link>

      {favourite && (
        <button
          className="bg-yellow-50 px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4"
          onClick={handleRemoveBook}
        >
          Xóa khỏi yêu thích
        </button>
      )}
    </div>
  );
};

export default BookCard;
