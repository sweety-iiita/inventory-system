const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models/index");

db.sequelize.sync();
const userRoutes = require("./resources/users/user-route.js");

// add middleware to parse Json file
app.use(bodyParser.json());
app.use("/", userRoutes);

app.listen(3030, () => {
  console.log("sweeety");
  console.log("server is running on 3030 port");
});
