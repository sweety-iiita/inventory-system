const db = require("../../../models/index");

async function getUsersQuery() {
  console.log("inside getUserQuery");
  const users = await db.User.findAll();
  return users;
}

module.exports = getUsersQuery;
