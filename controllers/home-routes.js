const { Album, Artist } = require("../models")
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/profile", async (req, res) => {
  res.render("profile");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/loggedIn", async (req, res) => {
  res.render("loggedIn");
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
    res.render("review", { dbAlbumData, id: req.params.id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/artist/:id", async (req, res) => {
  try {
    const dbArtistDataResponse = await Artist.findByPk(req.params.id, {
      include: Album,
    });
    const dbArtistData = dbArtistDataResponse.get({plain: true})
    console.log(dbArtistData)
    res.render("artist_detail", dbArtistData);
  }

  catch (err) {
    console.log(err);
    res.status(500).json(err);

  }


});



module.exports = router;
