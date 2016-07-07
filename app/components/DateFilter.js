var React = require("react");
var moment = require("moment");

var DateFilter = function (props) {
  var sec = props.time;
  var date = new Date(sec * 1000);
  var day = moment(date).format("dddd, MMMM D");
    return (
      <p>{day}</p>
    )
}

module.exports = DateFilter;
