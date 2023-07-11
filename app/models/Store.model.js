const { DataTypes } = require("sequelize");
const sequelize = require("../configs/dbConfig");

const Store = sequelize.define("Store", {
  store_id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  store_name: { type: DataTypes.STRING, allowNull: false, unique: true },
  logo: { type: DataTypes.BLOB },
  email: { type: DataTypes.STRING },
  phoneNumber: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
});

module.exports = Store;
