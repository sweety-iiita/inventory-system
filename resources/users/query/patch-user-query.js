const db = require("../../../models/index");

async function patchUserQuery(user, userId) {
  const [updatedCount, updatedRows] = await db.User.update(user, {
    where: {
      id: userId,
    },
    returning: true, // This ensures the updated rows are returned
  });
  return [updatedCount, updatedRows];
}

module.exports = patchUserQuery;
