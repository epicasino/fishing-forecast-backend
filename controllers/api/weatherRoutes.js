const router = require("express").Router();
const {
  getCurrentWeather,
  getWeatherForecast,
} = require("../../utils/weather");

router.get("/today/:location", async (req, res) => {
  const weather = await getCurrentWeather(req.params.location);

  res.status(200).json(weather);
});

router.get("/forecast/:location", async (req, res) => {
  const weather = await getWeatherForecast(req.params.location);

  res.status(200).json(weather);
});

module.exports = router;
