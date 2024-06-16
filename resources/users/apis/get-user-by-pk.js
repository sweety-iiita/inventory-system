const getUserByPkQuery = require("../query/get-user-by-pk-query");

const getUserByPk = async (req, res) => {
  userId = req.params.id;
  try {
    const user = await getUserByPkQuery(userId);
    if (user == null) {
      res.status(404).json("user not exist");
    } else {
      res.status(201).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error", error });
  }
};

module.exports = getUserByPk;
