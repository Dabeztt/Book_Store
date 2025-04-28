const router = require("express").Router();
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

//Them sach vao gio hang
router.put("/them-vao-gio-hang", authenticateToken, async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookInCart = userData.cart.includes(bookid);
    if (isBookInCart) {
      return res.json({
        status: "Success",
        message: "Sách đã có trong giỏ hàng",
      });
    }
    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
    return res.json({
      status: "Success",
      message: "Đã thêm vào giỏ hàng",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

//Xoa khoi gio hang
router.put(
  "/xoa-khoi-gio-hang/:bookid",
  authenticateToken,
  async (req, res) => {
    try {
      const { bookid } = req.params;
      const { id } = req.headers;
      await User.findByIdAndUpdate(id, {
        $pull: { cart: bookid },
      });

      return res.json({ status: "Success", message: "Đã xóa khỏi giỏ hàng" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "An error occurred" });
    }
  }
);

//xem gio hang
router.get("/xem-gio-hang", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("cart");
    const cart = userData.cart.reverse();

    return res.json({ status: "Success", data: cart });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});
module.exports = router;
