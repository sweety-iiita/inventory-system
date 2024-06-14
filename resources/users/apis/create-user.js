const createUserQuery = require("../query/create-user-query");

const createUser = async (req, res) => {
  console.log("inside create user");
  const user = req.body;
  console.log("sweety=", user);
  try {
    const newUser = await createUserQuery(user);
    res.status(201).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error creating user" });
  }
};

module.exports = createUser;
