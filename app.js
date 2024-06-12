const express = require("express");
const app = express();
console.log("hello world");
const db = require("./models/index");
app.use("/", (req, res) => {
  console.log("amit sah");
  res.status(201).json("server is ruuning on port");
});

db.sequelize.sync();
app.listen(3030, () => {
  console.log("sweeety");
  console.log("server is running on 3030 port");
});
