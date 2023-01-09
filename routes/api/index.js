const router = require("express").Router();
const artistRoutes = require("./artist-route");

router.use("/artist", artistRoutes);

module.exports = router;