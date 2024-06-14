const getUsersQuery = require("../query/get-users-query");

const getUsers = async (req, res) => {
  try {
    const users = await getUsersQuery();
    console.log("getusers", users);
    if (users == null) {
      res.status(404).json("error finding user, no user present");
    } else {
      res.status(201).json(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error finding user", error });
  }
};

module.exports = getUsers;
