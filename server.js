const express = require("express");
const connectToPostgres = require("./app/configs/db");

const app = express();

app.listen(9000, () => {
  connectToPostgres();

  console.log("Server Running");
});
