const router = require("express").Router();
const artistRoutes = require("./artist-route");
const albumRoutes = require("./album-route")

router.use("/artist", artistRoutes);
router.use("/album", albumRoutes)

module.exports = router;