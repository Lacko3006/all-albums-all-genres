const Artist = require("../models/Artist");
const Album = require("../models/Album");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/artist", async (req, res) => {
  try {
    const dbArtistData = await Artist.findAll({ raw: true });
    res.render("artist", {
      dbArtistData
    });

    console.log(dbArtistData)
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


router.get("/artist/:id", async (req, res) => {
  try {
    const dbArtistData = await Artist.findByPk(req.params.id, {raw: true});
    const dbAlbumData=await Album.findByPk(req.params.id,{raw:true})

    //console.log(dbArtistData)
    console.log(dbAlbumData)
    res.render("artist_detail", { dbArtistData, dbAlbumData});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    
  }


});

module.exports = router;
