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

var $ = _gojs["default"].GraphObject.make;

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

module.exports = {
  defaultGraph: defaultGraph
};

/***/ })

})
//# sourceMappingURL=start.js.07094b902029d98f0226.hot-update.js.map