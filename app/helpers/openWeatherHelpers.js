var axios = require("axios");

var id = "6b0e06d4e3fa6cf017e0b7967aa6d1af";
var param = "APPID=" + id;

function getCurrentWeather(city) {
  axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&type=accurate&" + param)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("Error in get current weather " + err);
  })
}

function getForecast(city) {
  return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&" + param + "&cnt=5")
  .then(function (data) {
    return data;
  })
  .catch(function (err) {
    console.log("Error in get five day forecast: " + err);
  })
}

var helpers = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}

module.exports = helpers;
