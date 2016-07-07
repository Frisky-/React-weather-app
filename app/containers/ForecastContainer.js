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
      forecastData: {}
    }
  },
  componentDidMount: function () {
    this.makeRequest(this.props.params.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      isLoading:true
    })
    this.makeRequest(nextProps.params.city);
  },
  makeRequest: function (city) {
    weatherHelpers.getForecast(city)
    .then(function (data) {
      this.setState({
        isLoading:false,
        forecastData: data
      })
    }.bind(this));
  },
  handleClickItem: function (weather) {
    this.context.router.push({
      pathname: "details/" + this.props.params.city,
      state:{
        weather: weather
      }
    })
  },
  render: function () {
    return (
        <Forecast
          city={this.props.params.city}
          isLoading={this.state.isLoading}
          forecastData={this.state.forecastData}
          onClickItem={this.handleClickItem}/>
      )
  }
})

module.exports = ForecastContainer;
