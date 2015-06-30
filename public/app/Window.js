var Window = React.createClass({displayName: "Window",
  render: function() {
    return (
      React.createElement("div", null, 
        "This is the ", React.createElement("b", null, this.props.name), "child component."
      )
    )
  }
});

