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

router.post("/review", async (req, res) => {
  try {
    const reviewGet = await Album.findOne({ where: { id: 1 } });

    Album.update(
      {
        album_review: req.body.review,
      },
      { where: { id: 1 } }
    );

    res.status(200).json(reviewGet);

    console.log(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
