const updateUserQuery = require("../query/update-user-query");

const updateUser = async (req, res) => {
  const user = req.body;
  const userId = req.params.id;
  try {
    const [updatedCount, updatedRows] = await updateUserQuery(user, userId);
    if (updatedCount > 0) {
      res.status(201).json({ updatedCount, updatedRows });
    } else {
      res.status(404).json(`Not able to update recored with id : ${userId}`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error ", error });
  }
};

module.exports = updateUser;

//PUT is generally used for updating a resource with a complete replacement. This means that any unspecified fields are typically set to null or their default values.
//PATCH is used for partial updates. Only the specified fields are updated, and unspecified fields remain unchanged.
