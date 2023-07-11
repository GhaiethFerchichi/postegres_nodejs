const {
  getAllStores,
  createStore,
  getStoreById,
  deleteStore,
} = require("../controllers/Store.controller");

const storeRouter = require("express").Router();

storeRouter.route("/").get(getAllStores).post(createStore);
storeRouter.route("/:id").get(getStoreById).delete(deleteStore);

module.exports = storeRouter;
