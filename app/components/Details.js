var React = require("react");
var DateFilter = require("./DateFilter");
require("../assets/Details.scss");


var Details = function (props) {
  return (
    <div className="details">
      <img className ="img img-responsive" src={"app/images/icons/" + props.weather.weather[0].icon + ".svg"} />
      <DateFilter time={props.weather.dt} />
      <p>{props.city}</p>
      <p>{props.weather.weather[0].description}</p>
      <p>Min temp: {Math.round(props.weather.temp.min - 273.15)}&#176;</p>
      <p>Max temp: {Math.round(props.weather.temp.max - 273.15)}&#176;</p>
      <p>Humidity: {props.weather.humidity}</p>
    </div>
  )
}

module.exports = Details;
