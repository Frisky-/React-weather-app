var React = require("react");
var CityPromptContainer = require("./CityPromptContainer");

var styles = {
  container:{
    width:"100%",
    height: "94%",
  },
  header:{
    display:"flex",
    justifyContent:"space-between",
    backgroundColor: "#dc5a32",
    padding:"10px",
    color:"white"
  },
  link:{
    margin:"0",
  }
}
var MainContainer = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.link}>Main.js Header!</h2>
          <CityPromptContainer direction="row"/>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = MainContainer;
