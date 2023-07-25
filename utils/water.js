const tides = async () => {
  const today = new Date().toISOString().slice(0, 10).split("-").join("");

  const hiLoTides = await fetch(
    `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${today}&range=144&station=9410170&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&application=DataAPI_Sample&format=json`
  ).then((response) => response.json());

  return hiLoTides;
};

module.exports = tides;
