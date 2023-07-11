const express = require("express");
const userRouter = require("./app/routes/User.routes");
const sequelize = require("./app/configs/dbConfig");
const { logRequest } = require("./app/middlewares/logRequest");

const colors = require("colors");
const User = require("./app/models/User.model");
const Store = require("./app/models/Store.model");
const Item = require("./app/models/Item.model");
const storeRouter = require("./app/routes/Store.routes");

const app = express();
app.use(express.json());

app.use(logRequest);

app.use("/user", userRouter);
app.use("/store", storeRouter);

// User.hasMany(Store);
// Store.belongsTo(User);
// Store.hasMany(Item);
// Item.belongsTo(Store);

// sequelize
//   .sync({ force: true })
//   .then(() => console.log("All models were synchronized successfully."));

const port = 9000;

sequelize.authenticate().then(() =>
  app.listen(port, () => {
    console.log(`Server Running on ${port} and database is synchronized`.green);
  })
);
