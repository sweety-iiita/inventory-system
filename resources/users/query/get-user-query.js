const db = require("../../../models/index");

async function getUserQuery(contact) {
  const user = await db.User.findOne({
    where: {
      contact: contact,
    },
  });
  return user;
}

module.exports = getUserQuery;
