var React = require("react");
var Details = require("../components/Details")

var DetailsContainer = React.createClass({
  render: function () {
    return (
      <Details weather={this.props.location.state.weather} city={this.props.params.city}/>
    )
  }
})

module.exports = DetailsContainer;
