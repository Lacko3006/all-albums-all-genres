const router = require("express").Router();
const artistRoutes = require("./artist-route");
const albumRoutes = require("./album-route");
const userRoute = require("./user-route");

router.use("/artist", artistRoutes);
router.use("/album", albumRoutes);
router.use("/user", userRoute)

module.exports = router;