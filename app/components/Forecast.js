
var React = require("react");
var PropTypes = React.PropTypes;
var Spinner = require("react-spinkit");
var Loader = require("react-loaders").Loader;
require('../assets/index.scss')

function Forecast (props) {
  console.log(props)
  return props.isLoading === true
    ? <div style={{display:"flex",alignItems:"center"}}><Spinner spinnerName="double-bounce" noFadeIn/> <Loader type="pacman" /> </div>
    : <div>Forecase Component</div>
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
