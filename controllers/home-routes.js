const Artist = require("../models/Artist");
const Album = require("../models/Album");
const User = require("../models/user");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/loggedIn", async (req, res) => {
  try {
    const dbSignUpData = await User.findOne({
      raw: true,
      order: [["id", "DESC"]],
    });
    res.render("loggedIn", {
      dbSignUpData,
    });
    console.log(dbSignUpData.name);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/artist", async (req, res) => {
  try {
    const dbArtistData = await Artist.findAll({ raw: true });
    res.render("artist", {
      dbArtistData
    });
    console.log(dbArtistData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all albums for album page
router.get("/album", async (req, res) => {
  try {
    const dbAlbumData = await Album.findAll({ raw: true });
    res.render("albums", {
      dbAlbumData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET album by PK
router.get("/album/:id", async (req, res) => {
  try {
    const dbAlbumData = await Album.findByPk(req.params.id, { raw: true });
    // const artistData = dbArtistData.get({ plain: true });
    res.render("review", { dbAlbumData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/artist/:id", async (req, res) => {
  try {
    const dbArtistData = await Artist.findByPk(req.params.id, { raw: true });
    // const artistData = dbArtistData.get({ plain: true });
    res.render("artist", { dbArtistData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    
  }


});

module.exports = router;
