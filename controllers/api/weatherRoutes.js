const router = require("express").Router();
const getWeather = require("../../utils/weather");

router.get("/today/:location", async (req, res) => {
  const weather = await getWeather(req.params.location);
  
  res.status(200).json(weather);
});

module.exports = router;

