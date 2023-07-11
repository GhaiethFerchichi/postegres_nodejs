const { DataTypes } = require("sequelize");
const sequelize = require("../configs/dbConfig");

const Item = sequelize.define("Item", {
  item_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  image1: {
    type: DataTypes.BLOB,
  },
  image2: {
    type: DataTypes.BLOB,
  },
  image3: {
    type: DataTypes.BLOB,
  },
});

module.exports = Item;
