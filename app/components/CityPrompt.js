var React = require("react");
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

function Button(props) {
  return (
    <button type="Button"
    className="btn btn-success"
    onClick={props.onSubmitCity}>
    {props.children}
    </button>
  )
}

function InputField(props) {
  return (
    <input type="text"
    className="form-control"
    placeholder="City Name"
    onChange={props.onUpdateCity}
    value={props.city}>
    </input>
  )
}

function getStyles(props) {
  return {
    display:"flex",
    flexDirection: props.direction || "column",
    justifyContent: "center",
    alignItems: "center"
  }
}

function CityPrompt(props) {
  return (
    <div style={getStyles(props)}>
    <InputField city={props.city} onUpdateCity={props.onUpdateCity} />
    <Link to={"forecast/" + props.city }>
      <Button onSubmitCity={props.onSubmitCity}>Get Weather</Button>
    </Link>
    </div>
  )
}

CityPrompt.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = CityPrompt;
