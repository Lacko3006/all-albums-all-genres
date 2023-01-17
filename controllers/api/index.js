const router = require("express").Router();
const artistRoutes = require("./artist-route");
const albumRoutes = require("./album-route");
const userRoute = require("./user-route");
const signUpRoute = require("./signup-route");
const { route } = require("./artist-route");

router.use("/login", artistRoutes);
router.use("/album", albumRoutes);
router.use("/user", userRoute);
router.use("/signup", signUpRoute);

module.exports = router;