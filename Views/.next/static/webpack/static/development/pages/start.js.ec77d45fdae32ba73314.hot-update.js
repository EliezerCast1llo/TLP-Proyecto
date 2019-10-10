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
  return $(_gojs["default"].Node, "Table", _functionsDfd["default"].nodeStyle(), // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
  $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "Rectangle", new _gojs["default"].Binding("fill", "color"), {
    fill: "#00A9C9",
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }, new _gojs["default"].Binding("figure", "figure")), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    margin: 8,
    maxSize: new _gojs["default"].Size(160, NaN),
    wrap: _gojs["default"].TextBlock.WrapFit,
    editable: true
  }, new _gojs["default"].Binding("text").makeTwoWay())), // four named ports, one on each side:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.TopSide, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.LeftSide, true, true), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.RightSide, true, true), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.BottomSide, true, false));
}

function conditionalGraph() {
  return $(_gojs["default"].Node, "Table", _functionsDfd["default"].nodeStyle(), // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
  $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "Diamond", {
    fill: "#00A9C9",
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }, new _gojs["default"].Binding("figure", "figure")), $(_gojs["default"].TextBlock, _functionsDfd["default"].textStyle(), {
    margin: 8,
    maxSize: new _gojs["default"].Size(160, NaN),
    wrap: _gojs["default"].TextBlock.WrapFit,
    editable: true
  }, new _gojs["default"].Binding("text").makeTwoWay())), // four named ports, one on each side:
  _functionsDfd["default"].makePort("T", _gojs["default"].Spot.Top, _gojs["default"].Spot.Top, false, true), _functionsDfd["default"].makePort("L", _gojs["default"].Spot.Left, _gojs["default"].Spot.Left, true, true), _functionsDfd["default"].makePort("R", _gojs["default"].Spot.Right, _gojs["default"].Spot.Right, true, true), _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function startGraph() {
  return $(_gojs["default"].Node, "Table", _functionsDfd["default"].nodeStyle(), $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "Circle", new _gojs["default"].Binding("fill", "color"), {
    minSize: new _gojs["default"].Size(40, 40),
    strokeWidth: 0,
    portId: "",
    fromLinkable: true,
    toLinkable: true
  }), $(_gojs["default"].TextBlock, "Start", _functionsDfd["default"].textStyle(), new _gojs["default"].Binding("text"))), // three named ports, one on each side except the top, all output only:

  /* this.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
   this.makePort("R", go.Spot.Right, go.Spot.Right, true, false),*/
  _functionsDfd["default"].makePort("B", _gojs["default"].Spot.Bottom, _gojs["default"].Spot.Bottom, true, false));
}

function varGraph() {
  return $(_gojs["default"].Node, "Table", _functionsDfd["default"].nodeStyle(), $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "square", new _gojs["default"].Binding("fill", "color"), {
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
  return $(_gojs["default"].Node, "Table", _functionsDfd["default"].nodeStyle(), $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "RightTriangle", new _gojs["default"].Binding("fill", "color"), {
    // angle: 65,
    // geometryString: "F M140 0 L70 70 0 50z",
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
  return $(_gojs["default"].Node, "Table", _functionsDfd["default"].nodeStyle(), new _gojs["default"].Binding("location", "loc", _gojs["default"].Point.parse), $(_gojs["default"].Panel, "Auto", $(_gojs["default"].Shape, "RoundedRectangle", new _gojs["default"].Binding("fill", "color"), {
    // angle: 65,
    // geometryString: "F M140 0 L70 70 0 50z",
    //minSize: new go.Size(80, 80),
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

module.exports = {
  defaultGraph: defaultGraph,
  conditionalGraph: conditionalGraph,
  startGraph: startGraph,
  varGraph: varGraph,
  ifGraph: ifGraph,
  caseGraph: caseGraph
};

/***/ })

})
//# sourceMappingURL=start.js.ec77d45fdae32ba73314.hot-update.js.map