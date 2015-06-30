var Map = React.createClass({displayName: "Map",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, " This is the Map parent component. "), 
        React.createElement(Window, {name: "window"})
      )
    )
  }
});

