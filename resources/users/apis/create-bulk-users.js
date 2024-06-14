const createBulkUsersQuery = require("../query/create-bulk-users-query");

const createBulkUsers = async (req, res) => {
  users = [];
  users = req.body;
  try {
    const newUsers = await createBulkUsersQuery(users);
    if (newUsers != null) {
      res.status(201).json({ newUser: "New users created", newUsers });
    } else {
      res.status(404).json("new users not created");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User not created ", error });
  }
};

module.exports = createBulkUsers;
