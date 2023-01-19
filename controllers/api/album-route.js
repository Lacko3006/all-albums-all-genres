const router = require("express").Router();
const Album = require("../../models/Album.js");

router.get("/", async (req, res) => {
  try {
    const albumGet = await Album.findAll();
    res.status(200).json(albumGet);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const reviewGet = await Album.findAll();

    Album.update(
      {
        album_review: req.body.review,
      },
      { where: { id: req.body.id } }
    );

    res.status(200).json(reviewGet);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
