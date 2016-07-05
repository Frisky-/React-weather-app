var React = require("react");
var CityPromptContainer = require("../containers/CityPromptContainer")
var style = {
  container:{
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    alignContent: "center",
    width:"100%",
    height:"100%",
    backgroundSize: "cover",
    backgroundImage: "url(app/images/pattern.svg)",
    color:"white",
  },
  h1:{
    fontSize:"45px"
  }
}
function Home() {
  return (
    <div style={style.container}>
      <h1 style={style.h1}>Enter a city name</h1>
      <CityPromptContainer />
    </div>
  )
}

module.exports = Home;
