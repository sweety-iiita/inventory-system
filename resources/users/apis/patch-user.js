const patchUserQuery = require("../query/patch-user-query");

const patchUser = async (req, res) => {
  try {
    const user = req.body;
    const userId = req.params.id;
    try {
      const [updatedCount, updatedRows] = await patchUserQuery(user, userId);
      if (updatedCount > 0) {
        res.status(201).json({ updatedCount, updatedRows });
      } else {
        res.status(404).json(`Not able to update recored with id : ${userId}`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error ", error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error", error });
  }
};

module.exports = patchUser;
