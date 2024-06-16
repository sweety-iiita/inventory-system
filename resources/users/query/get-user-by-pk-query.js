const db = require("../../../models/index");

async function getUserByPkQuery(userId) {
  const user = await db.User.findByPk(userId);
  return user;
}

module.exports = getUserByPkQuery;
