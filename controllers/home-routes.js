const Artist = require("../models/Artist");

const router = require("express").Router();

router.get('/', async (req, res) => {
    res.render('homepage') 
});

router.get('/login', async (req, res) => {
    res.render('login') 
});


router.get('/artist', async (req, res) => {
    res.render('artist')


    // try {
    //   const dbArtistData = await Artist.findByPk(req.params.id, {
    //     include: [
    //       {
    //         model: Artist,
    //         attributes: [
    //           'artist_name',
    //         ],
    //       },
    //     ],
    //   });
  
    //   const Artist = dbArtistData.get({ plain: true });
    //   res.render('artist', { Artist });
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
  });
  
  

module.exports = router;