const { Op } = require("sequelize");
const User = require("../models/User.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      success: true,
      message: `Get all users`,
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (user == null) {
      return res
        .status(404)
        .json({ success: false, message: `No User with the id ${id}` });
    }

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};

const createUser = async (req, res) => {
  const { body } = req;
  try {
    const newUser = await User.create(body);

    res.status(201).json({
      success: true,
      message: `User created with id = ${newUser.user_id}`,
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsCount = await User.destroy({
      where: {
        user_id: {
          [Op.eq]: id,
        },
      },
    });

    console.log(rowsCount);

    if (rowsCount == 0) {
      return res
        .status(404)
        .json({ success: false, message: `No User with id ${id}` });
    }
    res.status(200).json({
      success: true,
      message: `${rowsCount} Rows deleted for the id = ${id}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};
module.exports = { getAllUsers, getUserById, createUser, deleteUser };
