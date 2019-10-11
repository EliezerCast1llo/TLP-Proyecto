webpackHotUpdate("static\\development\\pages\\start.js",{

/***/ "./pages/Components/Dfd.jsx":
/*!**********************************!*\
  !*** ./pages/Components/Dfd.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoJs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gojs */ "../node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./figure */ "./pages/Components/figure.js");
/* harmony import */ var _modelsDfd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modelsDfd */ "./pages/Components/modelsDfd.js");
/* harmony import */ var _modelsDfd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modelsDfd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _functionsDfd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functionsDfd */ "./pages/Components/functionsDfd.js");
/* harmony import */ var _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_functionsDfd__WEBPACK_IMPORTED_MODULE_10__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

 //import './App.css';




var $ = gojs__WEBPACK_IMPORTED_MODULE_7___default.a.GraphObject.make;
var myDiagram;

var GoJs =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GoJs, _Component);

  function GoJs(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoJs);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoJs).call(this, props));
    _this.renderCanvas = _this.renderCanvas.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      myModel: null,
      myDiagram: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoJs, [{
    key: "renderCanvas",
    value: function renderCanvas() {
      myDiagram = $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Diagram, this.refs.goJsDiv, {
        grid: $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Grid", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "LineH", {
          stroke: "gray",
          strokeWidth: .9
        }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "LineH", {
          stroke: "darkslategray",
          strokeWidth: 1.5,
          interval: 10
        }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "LineV", {
          stroke: "gray",
          strokeWidth: .9
        }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "LineV", {
          stroke: "darkslategray",
          strokeWidth: 1.5,
          interval: 10
        })),
        "LinkDrawn": _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.showLinkLabel,
        // this DiagramEvent listener is defined below
        "LinkRelinked": _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.showLinkLabel,
        "toolManager.mouseWheelBehavior": gojs__WEBPACK_IMPORTED_MODULE_7___default.a.ToolManager.WheelZoom,
        "draggingTool.isGridSnapEnabled": true,
        "undoManager.isEnabled": true // enable undo & redo

      }); // define the Node templates for regular nodes

      myDiagram.nodeTemplateMap.add("", // the default category
      $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
      $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "Rectangle", new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("fill", "color"), {
        fill: "#00A9C9",
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("figure", "figure")), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        margin: 8,
        maxSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(160, NaN),
        wrap: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock.WrapFit,
        editable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text").makeTwoWay())), // four named ports, one on each side:
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("T", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.TopSide, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("L", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.LeftSide, true, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("R", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.RightSide, true, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.BottomSide, true, false)));
      myDiagram.nodeTemplateMap.add("Conditional", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
      $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "Diamond", {
        fill: "#00A9C9",
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("figure", "figure")), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        margin: 8,
        maxSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(160, NaN),
        wrap: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock.WrapFit,
        editable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text").makeTwoWay())), // four named ports, one on each side:
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("T", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("L", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, true, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("R", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, true, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, true, false)));
      myDiagram.nodeTemplateMap.add("Start", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "Circle", new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("fill", "color"), {
        minSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(40, 40),
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, "Start", this.textStyle(), new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text"))), // three named ports, one on each side except the top, all output only:

      /* this.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
       this.makePort("R", go.Spot.Right, go.Spot.Right, true, false),*/
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, true, false)));
      myDiagram.nodeTemplateMap.add("Var", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "square", new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("fill", "color"), {
        minSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(40, 40),
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        editable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text"))), // three named ports, one on each side except the top, all output only:
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("T", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.TopSide, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("L", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.LeftSide, true, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("R", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.RightSide, true, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.BottomSide, true, false)));
      myDiagram.nodeTemplateMap.add("If", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "RightTriangle", new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("fill", "color"), {
        // angle: 65,
        // geometryString: "F M140 0 L70 70 0 50z",
        minSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(80, 80),
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        editable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text"))), // three named ports, one on each side except the top, all output only:
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("T", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("L", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, true, false), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("R", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, true, false), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, true, false)));
      myDiagram.groupTemplate = $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Group, "Auto", {
        resizable: true,
        resizeObjectName: "PH"
      }, $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "RoundedRectangle", {
        fill: "rgba(128,128,128,0.33)",
        name: "PH"
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("desiredSize", "size", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size.parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size.stringify)), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Placeholder, // represents the area of all member parts,
      {
        padding: 3
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, {
        alignment: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right,
        font: "Bold 12pt Sans-Serif"
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text"))), //three named ports, one on each side except the top, all output only:
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("T", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, true, false));
      myDiagram.nodeTemplateMap.add("case", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Point.parse), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "RoundedRectangle", new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("fill", "color"), {
        // angle: 65,
        // geometryString: "F M140 0 L70 70 0 50z",
        //minSize: new go.Size(80, 80),
        fromSpot: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom,
        toSpot: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top,
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        editable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text"))), // three named ports, one on each side except the top, all output only:
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("T", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("L", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, true, false), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("R", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, true, false), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, true, false)));
      myDiagram.nodeTemplateMap.add("switch", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "octagon", new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("fill", "color"), {
        toSpot: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom,
        minSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(80, 80),
        strokeWidth: 0
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        editable: true
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text"))), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, true, false)));
      myDiagram.nodeTemplateMap.add("for", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Spot", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "Rectangle", {
        fill: "",
        minSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(140, 40),
        strokeWidth: 0
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "TriangleLeft", {
        width: 20,
        height: 40,
        fill: "black",
        alignment: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "Rectangle", {
        width: 120,
        height: 40,
        fill: "black"
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "TriangleRight", {
        width: 20,
        height: 40,
        fill: "black",
        alignment: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        text: "Inicio",
        font: "bold 8pt Helvetica, Arial, sans-serif",
        position: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Point(0, 0)
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        editable: true,
        text: "3",
        font: "bold 8pt Helvetica, Arial, sans-serif",
        position: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Point(200, 0)
      }), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("B", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Bottom, true, false)));
      myDiagram.nodeTemplateMap.add("End", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Table", this.nodeStyle(), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Panel, "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "Circle", {
        minSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(40, 40),
        fill: "#DC3C00",
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, "End", this.textStyle(), new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text"))), // three named ports, one on each side except the bottom, all input only:
      _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("T", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Top, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("L", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Left, false, true), _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.makePort("R", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Right, false, true))); // taken from ../extensions/Figures.js:

      gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape.defineFigureGenerator("File", function (shape, w, h) {
        var geo = new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Geometry();
        var fig = new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathFigure(0, 0, true); // starting point

        geo.add(fig);
        fig.add(new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment.Line, .75 * w, 0));
        fig.add(new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment.Line, w, .25 * h));
        fig.add(new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment.Line, w, h));
        fig.add(new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment.Line, 0, h).close());
        var fig2 = new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathFigure(.75 * w, 0, false);
        geo.add(fig2); // The Fold

        fig2.add(new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment.Line, .75 * w, .25 * h));
        fig2.add(new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.PathSegment.Line, w, .25 * h));
        geo.spot1 = new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot(0, .25);
        geo.spot2 = gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.BottomRight;
        return geo;
      });
      myDiagram.nodeTemplateMap.add("Comment", $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Node, "Auto", this.nodeStyle(), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "File", {
        fill: "#DEE0A3",
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        toLinkable: true
      }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock, this.textStyle(), {
        margin: 5,
        maxSize: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Size(200, NaN),
        wrap: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.TextBlock.WrapFit,
        textAlign: "center",
        editable: true,
        font: "bold 12pt Helvetica, Arial, sans-serif",
        stroke: '#454545'
      }, new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("text").makeTwoWay()) // no ports, because no links are allowed to connect with a comment
      )); // replace the default Link template in the linkTemplateMap

      myDiagram.linkTemplate = _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.linkTemplate(); // temporary links used by LinkingTool and RelinkingTool are also orthogonal:

      myDiagram.toolManager.linkingTool.temporaryLink.routing = gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Link.Orthogonal;
      myDiagram.toolManager.relinkingTool.temporaryLink.routing = gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Link.Orthogonal; // initialize the Palette that is on the left side of the page

      var myPalette = $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Palette, "Diamond", // must name or refer to the DIV HTML element
      {
        layout: $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.GridLayout, {
          alignment: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.GridLayout.Location
        }),
        nodeTemplateMap: myDiagram.nodeTemplateMap,
        // share the templates used by myDiagram
        model: new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.GraphLinksModel(_modelsDfd__WEBPACK_IMPORTED_MODULE_9___default.a.modelsData(), _modelsDfd__WEBPACK_IMPORTED_MODULE_9___default.a.modelsLinks())
      });
      myPalette.layout.sorting = gojs__WEBPACK_IMPORTED_MODULE_7___default.a.GridLayout.Forward;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log('componentDidMount')
      this.renderCanvas();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(prevProps) {
      /*console.log(JSON.stringify(prevProps, null, 2))
      if (this.props.data !== prevProps.data) {
       console.log('Updating 2');
       const model = this.state.myModel;
       const diagram = this.state.myDiagram;
       model.nodeDataArray = this.props.data;
       diagram.model = model;
       this.setState({ myModel: model, myDiagram: diagram });
      }*/
    }
  }, {
    key: "onClickChange",
    value: function onClickChange() {
      console.log(myDiagram.model.toJson());
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "container-fluid"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-md-3",
        id: "Diamond",
        style: {
          'backgroundColor': '#373737'
        }
      }), __jsx("div", {
        className: "col-md-9 row"
      }, __jsx("div", {
        id: "blockWhite"
      }), __jsx("div", {
        ref: "goJsDiv",
        id: "goJsDiv",
        className: "col-md-12",
        style: {
          'width': '500px',
          'height': '700px',
          'backgroundColor': '#373737'
        }
      }))), __jsx("div", {
        className: "row"
      }, __jsx("button", {
        className: "btn btn-primary",
        onClick: this.onClickChange
      }, "Save")));
    }
  }, {
    key: "textStyle",
    value: function textStyle() {
      return {
        font: "bold 11pt Helvetica, Arial, sans-serif",
        margin: 2,
        stroke: "whitesmoke"
      };
    }
  }, {
    key: "nodeStyle",
    value: function nodeStyle() {
      return [// The Node.location comes from the "loc" property of the node data,
      // converted by the Point.parse static method.
      // If the Node.location is changed, it updates the "loc" property of the node data,
      // converting back using the Point.stringify static method.
      new gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Binding("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Point.parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Point.stringify), {
        // the Node.location is at the center of each node
        locationSpot: gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Spot.Center
      }];
    }
  }]);

  return GoJs;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=start.js.cd137c77741b4c586358.hot-update.js.map