var React = require("react");
var PropTypes = React.PropTypes;
var DateFilter = require("./DateFilter");
require("../assets/ForecastItem.scss")
var ForecastItem = function (props) {
    return (
      <div className="forecastItem" onClick={props.onClickItem}>
        <img className="icon" className="img img-responsive" src={"app/images/icons/" + props.data.weather[0].icon + ".svg"} />
        <h3><DateFilter time={props.data.dt} /></h3>
      </div>
    )
};

ForecastItem.propTypes = {
  data: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = ForecastItem;
