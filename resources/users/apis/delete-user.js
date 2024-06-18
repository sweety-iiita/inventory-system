const deleteUserQuery = require("../query/delete-user-query");

const deleteUser = async (req, res) => {
  const { contact } = req.body;
  try {
    const deletedCount = await deleteUserQuery(contact);
    if (deletedCount > 0) {
      res.status(201).json("Required row got deleted");
    } else {
      res.status(404).json(`No User found with contact : ${contact}`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error", error });
  }
};

module.exports = deleteUser;
