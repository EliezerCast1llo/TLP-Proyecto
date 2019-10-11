webpackHotUpdate("static\\development\\pages\\start.js",{

/***/ "./pages/Components/functionsDfd.js":
/*!******************************************!*\
  !*** ./pages/Components/functionsDfd.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _gojs = _interopRequireDefault(__webpack_require__(/*! gojs */ "../node_modules/gojs/release/go.js"));

var $ = _gojs["default"].GraphObject.make;

function linkTemplate() {
  var template = $(_gojs["default"].Link, // the whole link panel
  {
    routing: _gojs["default"].Link.AvoidsNodes,
    curve: _gojs["default"].Link.JumpOver,
    corner: 5,
    toShortLength: 4,
    relinkableFrom: true,
    relinkableTo: true,
    reshapable: true,
    resegmentable: true,
    selectionAdorned: false
  }, new _gojs["default"].Binding("points").makeTwoWay(), $(_gojs["default"].Shape, // the highlight shape, normally transparent
  {
    isPanelMain: true,
    strokeWidth: 8,
    stroke: "transparent",
    name: "HIGHLIGHT"
  }), $(_gojs["default"].Shape, // the link path shape
  {
    isPanelMain: true,
    stroke: "white",
    strokeWidth: 2
  }, new _gojs["default"].Binding("stroke", "isSelected", function (sel) {
    return sel ? "dodgerblue" : "gray";
  }).ofObject()), $(_gojs["default"].Shape, // the arrowhead
  {
    toArrow: "standard",
    strokeWidth: 0,
    fill: "white"
  }), $(_gojs["default"].Panel, "Auto", // the link label, normally not visible
  {
    visible: false,
    name: "LABEL",
    segmentIndex: 2,
    segmentFraction: 0.5
  }, new _gojs["default"].Binding("visible", "visible").makeTwoWay(), $(_gojs["default"].Shape, "RoundedRectangle", // the label shape
  {
    fill: "#F8F8F8",
    strokeWidth: 0
  }), $(_gojs["default"].TextBlock, "Yes", // the label
  {
    textAlign: "center",
    font: "10pt helvetica, arial, sans-serif",
    stroke: "#333333",
    editable: true
  }, new _gojs["default"].Binding("text").makeTwoWay())));
  return template;
}

function makePort(name, align, spot, output, input) {
  var horizontal = align.equals(_gojs["default"].Spot.Top) || align.equals(_gojs["default"].Spot.Bottom); // the port is basically just a transparent rectangle that stretches along the side of the node,
  // and becomes colored when the mouse passes over it

  return $(_gojs["default"].Shape, {
    fill: "transparent",
    // changed to a color in the mouseEnter event handler
    strokeWidth: 0,
    // no stroke
    width: horizontal ? NaN : 8,
    // if not stretching horizontally, just 8 wide
    height: !horizontal ? NaN : 8,
    // if not stretching vertically, just 8 tall
    alignment: align,
    // align the port on the main Shape
    stretch: horizontal ? _gojs["default"].GraphObject.Horizontal : _gojs["default"].GraphObject.Vertical,
    portId: name,
    // declare this object to be a "port"
    fromSpot: spot,
    // declare where links may connect at this port
    fromLinkable: output,
    // declare whether the user may draw links from here
    toSpot: spot,
    // declare where links may connect at this port
    toLinkable: input,
    // declare whether the user may draw links to here
    cursor: "pointer",
    // show a different cursor to indicate potential link point
    mouseEnter: function mouseEnter(e, port) {
      // the PORT argument will be this Shape
      if (!e.diagram.isReadOnly) port.fill = "#00abe469";
    },
    mouseLeave: function mouseLeave(e, port) {
      port.fill = "transparent";
    }
  });
}

function showLinkLabel(e) {
  var label = e.subject.findObject("LABEL");
  if (label !== null) label.visible = e.subject.fromNode.data.category === "Conditional";
}

function nodeStyle() {
  return [// The Node.location comes from the "loc" property of the node data,
  // converted by the Point.parse static method.
  // If the Node.location is changed, it updates the "loc" property of the node data,
  // converting back using the Point.stringify static method.
  new _gojs["default"].Binding("location", "loc", _gojs["default"].Point.parse).makeTwoWay(_gojs["default"].Point.stringify), {
    // the Node.location is at the center of each node
    locationSpot: _gojs["default"].Spot.Center
  }];
}

function textStyle() {
  return {
    font: "bold 11pt Helvetica, Arial, sans-serif",
    margin: 2,
    stroke: "whitesmoke"
  };
}

module.exports = {
  linkTemplate: linkTemplate,
  makePort: makePort,
  showLinkLabel: showLinkLabel,
  nodeStyle: nodeStyle,
  textStyle: textStyle
};

/***/ })

})
//# sourceMappingURL=start.js.ff9124d507f8cb6ba801.hot-update.js.map