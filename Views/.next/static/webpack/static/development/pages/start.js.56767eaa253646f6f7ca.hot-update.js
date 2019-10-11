webpackHotUpdate("static\\development\\pages\\start.js",{

/***/ "./pages/Components/nodeTemplate.js":
/*!******************************************!*\
  !*** ./pages/Components/nodeTemplate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _gojs = _interopRequireDefault(__webpack_require__(/*! gojs */ "../node_modules/gojs/release/go.js"));

var _functionsDfd = _interopRequireDefault(__webpack_require__(/*! ./functionsDfd */ "./pages/Components/functionsDfd.js"));

var $ = _gojs["default"].GraphObject.make; // the default category

function defaultGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), {
    locationSpot: _gojs["default"].Spot.Center
  }, // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
  $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "Rectangle", new _gojs["default"].Binding("fill", "color"), {
    fill: "#00A9C9",
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    margin: 5,
    editable: true
  }, new _gojs["default"].Binding("text").makeTwoWay())), // four named ports, one on each side:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.TopSide, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.LeftSide, true, true), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.RightSide, true, true), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.BottomSide, true, false));
}

function conditionalGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), {
    locationSpot: _gojs["default"].Spot.Center
  }, // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
  $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "Diamond", {
    fill: "#00A9C9",
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    margin: 8,
    editable: true
  }, new _gojs["default"].Binding("text").makeTwoWay())), // four named ports, one on each side:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.Top, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.Left, true, true), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.Right, true, true), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function startGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), {
    locationSpot: _gojs["default"].Spot.Center
  }, $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "Circle", new _gojs["default"].Binding("fill", "color"), {
    minSize: new _gojs["default"].Size(40, 40),
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, "Start", _functionsDfd["default"].textStyle(), new _gojs["default"].Binding("text"))), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function varGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), {
    locationSpot: _gojs["default"].Spot.Center
  }, $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "square", new _gojs["default"].Binding("fill", "color"), {
    minSize: new _gojs["default"].Size(40, 40),
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    editable: true
  }, new _gojs["default"].Binding("text"))), // three named ports, one on each side except the top, all output only:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.TopSide, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.LeftSide, true, true), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.RightSide, true, true), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.BottomSide, true, false));
}

function ifGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), {
    locationSpot: _gojs["default"].Spot.Center
  }, $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "RightTriangle", new _gojs["default"].Binding("fill", "color"), {
    minSize: new _gojs["default"].Size(80, 80),
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    editable: true
  }, new _gojs["default"].Binding("text"))), // three named ports, one on each side except the top, all output only:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.Top, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.Left, true, false), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.Right, true, false), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function caseGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), {
    locationSpot: _gojs["default"].Spot.Center
  }, new _gojs["default"].Binding("location", "loc", _gojs["default"].Point.parse), $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "RoundedRectangle", new _gojs["default"].Binding("fill", "color"), {
    fromSpot: _gojs["default"].Spot.Bottom,
    toSpot: _gojs["default"].Spot.Top,
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    editable: true
  }, new _gojs["default"].Binding("text"))), // three named ports, one on each side except the top, all output only:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.Top, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.Left, true, false), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.Right, true, false), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function switchGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), {
    locationSpot: _gojs["default"].Spot.Center
  }, $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "octagon", new _gojs["default"].Binding("fill", "color"), {
    toSpot: _gojs["default"].Spot.Bottom,
    minSize: new _gojs["default"].Size(80, 80),
    strokeWidth: 0
  }), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    editable: true
  }, new _gojs["default"].Binding("text"))), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function forGraph() {
  return $(_gojs["default"].Node, "Spot", {
    locationSpot: _gojs["default"].Spot.Center
  }, $(_gojs["default"].Shape, "Rectangle", {
    fill: "",
    minSize: new _gojs["default"].Size(140, 40),
    strokeWidth: 0
  }), $(_gojs["default"].Shape, "TriangleLeft", {
    width: 20,
    height: 40,
    fill: "black",
    alignment: _gojs["default"].Spot.Left
  }), $(_gojs["default"].Shape, "Rectangle", {
    width: 120,
    height: 40,
    fill: "black"
  }), $(_gojs["default"].Shape, "TriangleRight", {
    width: 20,
    height: 40,
    fill: "black",
    alignment: _gojs["default"].Spot.Right
  }), $(_gojs["default"].Part, "Vertical", $(_gojs["default"].TextBlock, {
    text: "a Text Block"
  }), $(_gojs["default"].TextBlock, {
    text: "a Text Block",
    stroke: "red"
  }), $(_gojs["default"].TextBlock, {
    text: "a Text Block",
    background: "lightblue"
  }), $(_gojs["default"].TextBlock, {
    text: "a Text Block",
    font: "bold 14pt serif"
  })), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function endGraph() {
  return $(_gojs["default"].Node, "Spot", _functionsDfd["default"].nodeStyle(), $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "Circle", {
    minSize: new _gojs["default"].Size(40, 40),
    fill: "#DC3C00",
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, "End", _functionsDfd["default"].textStyle(), new _gojs["default"].Binding("text"))), // three named ports, one on each side except the bottom, all input only:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.Top, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.Left, false, true), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.Right, false, true));
}

function commentGraph() {
  return $(_gojs["default"].Node, "Auto", _functionsDfd["default"].nodeStyle(), $(_gojs["default"].Shape, "File", {
    fill: "#DEE0A3",
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    margin: 5,
    maxSize: new _gojs["default"].Size(200, NaN),
    wrap: _gojs["default"].TextBlock.WrapFit,
    textAlign: "center",
    editable: true,
    font: "bold 12pt Helvetica, Arial, sans-serif",
    stroke: '#454545'
  }, new _gojs["default"].Binding("text").makeTwoWay()) // no ports, because no links are allowed to connect with a comment
  );
}

function groupGraph() {
  return $(_gojs["default"].Group, "Auto", {
    resizable: true,
    resizeObjectName: "PH"
  }, $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "RoundedRectangle", {
    fill: "rgba(128,128,128,0.33)",
    name: "PH"
  }, new _gojs["default"].Binding("desiredSize", "size", _gojs["default"].Size.parse).makeTwoWay(_gojs["default"].Size.stringify)), $(_gojs["default"].Placeholder, // represents the area of all member parts,
  {
    padding: 3
  }), $(_gojs["default"].TextBlock, {
    alignment: _gojs["default"].Spot.Right,
    font: "Bold 12pt Sans-Serif"
  }, new _gojs["default"].Binding("text"))), //three named ports, one on each side except the top, all output only:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.Top, false, true), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

module.exports = {
  defaultGraph: defaultGraph,
  conditionalGraph: conditionalGraph,
  startGraph: startGraph,
  varGraph: varGraph,
  ifGraph: ifGraph,
  caseGraph: caseGraph,
  switchGraph: switchGraph,
  forGraph: forGraph,
  endGraph: endGraph,
  commentGraph: commentGraph,
  groupGraph: groupGraph
};

/***/ })

})
//# sourceMappingURL=start.js.56767eaa253646f6f7ca.hot-update.js.map