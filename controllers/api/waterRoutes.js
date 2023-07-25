const router = require("express").Router();
const tides = require("../../utils/water");

router.get("/tides", async (req, res) => {
  const tideData = await tides();

  res.status(200).json(tideData);
});

module.exports = router;
