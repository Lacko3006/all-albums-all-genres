const Artist = require("../models/Artist");

const router = require("express").Router();

router.get('/', async (req, res) => {
    res.render('homepage') 
});

router.get('/login', async (req, res) => {
    res.render('login') 
});


router.get('/artist/:id', async (req, res) => {
    try {
      const dbArtistData = await Artist.findByPk(req.params.id);
      const artistData = dbArtistData.get({ plain: true });
      res.render('artist', { artistData });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  

module.exports = router;