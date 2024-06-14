const db = require("../../../models/index");
const userSignInQuery = require("../query/user-sign-in-query");

const verifyOtp = async (req, res) => {
  const { contact, otp } = req.body;
  try {
    const user = userSignInQuery(contact);
    if (user != null) {
      if (otp == 11111) {
        res.status(201).json("otp verificaton done");
      } else {
        res.staus(404).json("otp verification failed");
      }
    } else {
      res.status(500).json("user not exist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error finding user", error });
  }
};

module.exports = verifyOtp;
