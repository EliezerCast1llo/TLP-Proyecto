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
/* harmony import */ var _nodeTemplate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodeTemplate */ "./pages/Components/nodeTemplate.js");
/* harmony import */ var _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nodeTemplate__WEBPACK_IMPORTED_MODULE_11__);






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
          stroke: "transparent",
          strokeWidth: .9
        }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "LineH", {
          stroke: "gray",
          strokeWidth: 1,
          interval: 2
        }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "LineV", {
          stroke: "transparent",
          strokeWidth: .9
        }), $(gojs__WEBPACK_IMPORTED_MODULE_7___default.a.Shape, "LineV", {
          stroke: "gray",
          strokeWidth: 1,
          interval: 2
        })),
        "LinkDrawn": _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.showLinkLabel,
        // this DiagramEvent listener is defined below
        "LinkRelinked": _functionsDfd__WEBPACK_IMPORTED_MODULE_10___default.a.showLinkLabel,
        "toolManager.mouseWheelBehavior": gojs__WEBPACK_IMPORTED_MODULE_7___default.a.ToolManager.WheelZoom,
        "draggingTool.isGridSnapEnabled": true,
        "undoManager.isEnabled": true // enable undo & redo

      }); // define the Node templates for regular nodes

      myDiagram.nodeTemplateMap.add("", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.defaultGraph()); // the default category

      myDiagram.nodeTemplateMap.add("Conditional", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.conditionalGraph());
      myDiagram.nodeTemplateMap.add("Start", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.startGraph());
      myDiagram.nodeTemplateMap.add("Var", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.varGraph());
      myDiagram.nodeTemplateMap.add("If", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.ifGraph());
      myDiagram.nodeTemplateMap.add("case", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.caseGraph());
      myDiagram.nodeTemplateMap.add("switch", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.switchGraph());
      myDiagram.nodeTemplateMap.add("for", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.forGraph());
      myDiagram.nodeTemplateMap.add("End", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.endGraph());
      myDiagram.nodeTemplateMap.add("Comment", _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.commentGraph());
      myDiagram.groupTemplate = _nodeTemplate__WEBPACK_IMPORTED_MODULE_11___default.a.groupGraph(); // replace the default Link template in the linkTemplateMap

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
  }]);

  return GoJs;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=start.js.cc864d19016c6be5661b.hot-update.js.map