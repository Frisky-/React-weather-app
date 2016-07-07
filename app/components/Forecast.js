var React = require("react");
var PropTypes = React.PropTypes;
var Loader = require("react-loaders").Loader;
var ForecastItem = require("./ForecastItem");
require("../assets/index.scss");
require("../assets/Forecast.scss")

function Forecast (props) {
  var items = [];
  if(props.isLoading === false){
    props.forecastData.data.list.forEach(function (item) {
      items.push(<ForecastItem key={item.dt} data={item} city={props.city} onClickItem={props.onClickItem.bind(null,item)}/>);
    })
  }
  return props.isLoading === true
    ? <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}> <Loader type="pacman" /> </div>
    :
    <div className="container">
      <div className="header">
        <h1 style={{fontSize:"65px"}}>{props.city}</h1>
        <span style={{fontSize:"35px"}}>Pick a day</span>
      </div>
      <div className="items">
        {items}
      </div>
    </div>
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired
}

module.exports = Forecast;
