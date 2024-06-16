const createUserQuery = require("../query/create-user-query");
const getUserQuery = require("../query/get-user-query");

const createUser = async (req, res) => {
  const user = req.body;
  try {
    const existingUser = await getUserQuery(user.contact);
    if (existingUser != null) {
      res.status(409).json("user already exist");
    }
    const newUser = await createUserQuery(user);
    res.status(201).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error creating user" });
  }
};

module.exports = createUser;
