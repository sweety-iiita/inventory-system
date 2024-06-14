const db = require("../../../models/index");

async function createUserQuery(user) {
  const newUser = await db.User.create(user);
  return newUser;
}

module.exports = createUserQuery;
