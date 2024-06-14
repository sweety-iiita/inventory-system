const db = require("../../../models/index");

async function createBulkUsersQuery(users) {
  const newUsers = db.User.bulkCreate(users);
  return newUsers;
}

module.exports = createBulkUsersQuery;
