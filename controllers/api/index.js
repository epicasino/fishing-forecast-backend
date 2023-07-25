const router = require("express").Router();
const weatherRoutes = require("./weatherRoutes");
const waterRoutes = require("./waterRoutes");

router.use("/weather", weatherRoutes);
router.use("/water", waterRoutes);

module.exports = router;
