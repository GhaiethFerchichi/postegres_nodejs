const Store = require("../models/Store.model");

const getAllStores = async (req, res) => {
  try {
    const stores = Store.findAll();
    res.status(200).json({
      success: true,
      message: `Get all Stores`,
      data: stores,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};

const getStoreById = async (req, res) => {
  const { id } = req.params;

  try {
    const store = await Store.findByPk(id);

    if (store == null) {
      return res
        .status(404)
        .json({ success: false, message: `No store with the id ${id}` });
    }

    return res.status(200).json({ success: true, data: store });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};

const createStore = async (req, res) => {
  const { body } = req;
  try {
    const newStore = await Store.create(body);

    res.status(201).json({
      success: true,
      message: `Store created with id = ${newStore.store_id}`,
      data: newStore,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};

const deleteStore = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsCount = await Store.destroy({
      where: {
        store_id: {
          [Op.eq]: id,
        },
      },
    });

    console.log(rowsCount);

    if (rowsCount == 0) {
      return res
        .status(404)
        .json({ success: false, message: `No Store with id ${id}` });
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
module.exports = { getAllStores, getStoreById, createStore, deleteStore };
