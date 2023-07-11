const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
} = require("../controllers/User.controller");

const userRouter = Router();

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUserById).delete(deleteUser);

module.exports = userRouter;
