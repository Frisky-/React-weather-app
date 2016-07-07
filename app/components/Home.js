var React = require("react");
var CityPromptContainer = require("../containers/CityPromptContainer")
require("../assets/Home.scss");

function Home() {
  return (
    <div className="homeContainer">
      <h1 >Enter a city name</h1>
      <CityPromptContainer />
    </div>
  )
}

module.exports = Home;
