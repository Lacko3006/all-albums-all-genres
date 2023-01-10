const router = require("express").Router();
const Signup = require("../../models/signup.js");


router.get("/", async (req, res) => {
  try {
    const signUpGet = await Signup.findAll();
    res.status(200).json(signUpGet);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router