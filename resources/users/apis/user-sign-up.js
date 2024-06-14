const db = require("../../../models/index");
const createUserQuery = require("../query/create-user-query");
const userSignInQuery = require("../query/user-sign-in-query");

const signUp = async (req, res) => {
  const data = req.body;
  console.log("data.contact", data.contact);
  try {
    const user = userSignInQuery(contact);
    console.log("sweetyUser=", user);
    if (user == null) {
      const newUser = await createUserQuery(data);
      if (newUser == null) {
        res.status(404).json("Newuser not created");
      } else {
        res.status(201).json("User created");
      }
    } else {
      res.status(201).json("User already exist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error finding user", error });
  }
};

module.exports = signUp;
