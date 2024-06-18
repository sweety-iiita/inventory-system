const db = require("../../../models/index");

async function deleteUserQuery(contact) {
  const deletedCount = await db.User.destroy({
    where: {
      contact: contact,
    },
  });
  return deletedCount;
}

module.exports = deleteUserQuery;
