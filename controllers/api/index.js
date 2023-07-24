const router = require("express").Router();
const weatherRoutes = require("./weatherRoutes");

router.use("/weather", weatherRoutes);

module.exports = router;
