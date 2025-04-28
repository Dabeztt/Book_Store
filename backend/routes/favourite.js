const router = require("express").Router();
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

//Them sach vao yeu thich
router.put("/them-sach-yeu-thich", authenticateToken, async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookFavourite = userData.favourites.includes(bookid);
    if (isBookFavourite) {
      return res
        .status(200)
        .json({ message: "Sách đã có trong mục yêu thích rồi" });
    }
    await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
    return res.status(200).json({ message: "Đã thêm sách vào yêu thích" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

//Xoa khoi yeu thich
router.put("/xoa-khoi-yeu-thich", authenticateToken, async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookFavourite = userData.favourites.includes(bookid);
    if (isBookFavourite) {
      await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
    }
    return res.status(200).json({ message: "Đã xóa sách khỏi yêu thích" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

//Xem sach yeu thich
router.get("/xem-sach-yeu-thich", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("favourites");
    const favouriteBooks = userData.favourites;
    return res.json({ status: "Success", data: favouriteBooks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});
module.exports = router;
