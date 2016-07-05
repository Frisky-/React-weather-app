var React = require("react");
var Forecast = require("../components/Forecast");
var weatherHelpers = require("../helpers/openWeatherHelpers");

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      data: {}
    }
  },
  componentDidMount: function () {
    var query = this.props.params.city;
     weatherHelpers.getForecast(query)
     .then(function (data) {
       this.setState({
         isLoading: true,
         data: data
       })
     }.bind(this));
  },
  render: function () {
    return (
      <Forecast
        city={this.props.params.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.data} />
      )
  }
})

module.exports = ForecastContainer;
