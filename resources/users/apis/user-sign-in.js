const jwt = require("jsonwebtoken");
const db = require("../../../models/index");
const userSignInQuery = require("../query/user-sign-in-query");
const secretKey =
  "4cdf39fd0ecaae636ad78940bc0684423bb173b880b7dc5b4c0b9b900863be3e";

const userSignIn = async (req, res) => {
  console.log("userSign : ");
  const { userName, email, contact, profilePhoto } = req.body;
  try {
    const user = userSignInQuery(contact);
    console.log("user=", user);
    if (user == null) {
      // generate otp
      let result = 0;
      max = 10;
      min = 1;
      for (i = 0; i < 4; i++) {
        result = result * 10 + Math.floor(Math.random() * (max - min) + min);
      }
      res
        .status(500)
        .json({ otp: "failed to login user , try using otp", result });
    } else {
      payload = {
        userName: userName,
        email: email,
        contact: contact,
        profilePhoto: profilePhoto,
      };
      const token = jwt.sign(payload, secretKey);
      res.status(201).json(token);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error finding user" });
  }
};

module.exports = userSignIn;
