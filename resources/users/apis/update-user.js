const updateUserQuery = require("../query/update-user-query");

const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error ", error });
  }
};

module.exports = updateUser;
