const db = require("../../../models/index");

async function userSignInQuery(contact) {
  const user = await db.User.findOne({ where: { contact: contact } });
  return user;
}

module.exports = userSignInQuery;
