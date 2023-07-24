const router = require("express").Router();
const getWeather = require("../../utils/weather");

router.get("/", async (req, res) => {
  // const weather = await getWeather(req.params.zipCode);

  const hello = 'hi';
  
  res.status(200).json(hello);
});

module.exports = router;
