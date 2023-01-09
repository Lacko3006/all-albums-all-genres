const router = require("express").Router();
const Artist = require("../../models/Artist.js");
// create model for artist

router.get("/", async (req, res) => {
  try {
    const artistGet = await Artist.findAll();
    res.status(200).json(artistGet);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router

