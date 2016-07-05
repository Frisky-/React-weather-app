var React = require("react");
var CityPrompt = require("../components/CityPrompt");
var weatherHelpers = require("../helpers/openWeatherHelpers");

var CityPromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function () {
    return {
      direction:"column"
    }
  },
  getInitialState: function () {
    return {
      city:""
    }
  },
  handleSubmitCity: function (e) {
    var city = this.state.city;
    this.context.router.push({
      pathname: "forecast/" + this.state.city,
      query: {
        city: this.state.city
      }
    })
    this.setState({
      city:""
    })
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <CityPrompt
      direction={this.props.direction}
      onSubmitCity={this.handleSubmitCity}
      onUpdateCity={this.handleUpdateCity}
      city={this.state.city} />
    )
  }
})

module.exports = CityPromptContainer;
