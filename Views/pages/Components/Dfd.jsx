import React, { Component } from 'react';
import go from 'gojs';
//import './App.css';
import './figure';
const $ = go.GraphObject.make;
var myDiagram;
export default class GoJs extends Component {
  constructor(props) {
    super(props);
    this.renderCanvas = this.renderCanvas.bind(this);
    this.state = { myModel: null, myDiagram: null }
  }

  renderCanvas() {
    myDiagram = $(go.Diagram, this.refs.goJsDiv, {
      "LinkDrawn": this.showLinkLabel,  // this DiagramEvent listener is defined below
      "LinkRelinked": this.showLinkLabel,
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      "undoManager.isEnabled": true  // enable undo & redo
    }
    );
    // define the Node templates for regular nodes
    myDiagram.nodeTemplateMap.add("", // the default category
      $(go.Node, "Table", this.nodeStyle(),
        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(go.Panel, "Auto",
          $(go.Shape, "Rectangle", new go.Binding("fill", "color"),
            {
              fill: "#00A9C9",
              strokeWidth: 0,
              portId: "",
              fromLinkable: true, toLinkable: true
            },
            new go.Binding("figure", "figure")),
          $(go.TextBlock, this.textStyle(), {
            margin: 8,
            maxSize: new go.Size(160, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true
          },
            new go.Binding("text").makeTwoWay())
        ),
        // four named ports, one on each side:
        this.makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        this.makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        this.makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        this.makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
      ));
    myDiagram.nodeTemplateMap.add("Conditional",
      $(go.Node, "Table", this.nodeStyle(),
        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(go.Panel, "Auto",
          $(go.Shape, "Diamond", {
            fill: "#00A9C9",
            strokeWidth: 0,
            portId: "",
            fromLinkable: true, toLinkable: true
          },
            new go.Binding("figure", "figure")),
          $(go.TextBlock, this.textStyle(), {
            margin: 8,
            maxSize: new go.Size(160, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true
          },
            new go.Binding("text").makeTwoWay())
        ),
        // four named ports, one on each side:
        this.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        this.makePort("L", go.Spot.Left, go.Spot.Left, true, true),
        this.makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        this.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
      ));
    myDiagram.nodeTemplateMap.add("Start",
      $(go.Node, "Table", this.nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "Circle",
            new go.Binding("fill", "color"), {
            minSize: new go.Size(40, 40),
            strokeWidth: 0,
            portId: "",
            fromLinkable: true, toLinkable: true
          }),
          $(go.TextBlock, "Start", this.textStyle(),
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        /* this.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
         this.makePort("R", go.Spot.Right, go.Spot.Right, true, false),*/
        this.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
      ));
    myDiagram.nodeTemplateMap.add("Var",
      $(go.Node, "Table", this.nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "square",
            new go.Binding("fill", "color"), {
            minSize: new go.Size(40, 40),
            strokeWidth: 0,
            portId: "",
            fromLinkable: true, toLinkable: true
          }),
          $(go.TextBlock, this.textStyle(), { editable: true },
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        this.makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        this.makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        this.makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        this.makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
      ));


    myDiagram.nodeTemplateMap.add("If",
      $(go.Node, "Table", this.nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "RightTriangle",
            new go.Binding("fill", "color"), {
            // angle: 65,
            // geometryString: "F M140 0 L70 70 0 50z",
            minSize: new go.Size(80, 80),
            strokeWidth: 0,
            portId: "",
            fromLinkable: true, toLinkable: true
          }),
          $(go.TextBlock, this.textStyle(), { editable: true },
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        this.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        this.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
        this.makePort("R", go.Spot.Right, go.Spot.Right, true, false),
        this.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
      ));

    myDiagram.groupTemplate =
      $(go.Group, "Auto", {
        resizable: true,
        resizeObjectName: "PH"
      },
        $(go.Panel, "Auto",
          $(go.Shape, "RoundedRectangle",
            {
              fill: "rgba(128,128,128,0.33)",
              name: "PH",
            },
            new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)),
          $(go.Placeholder,    // represents the area of all member parts,
            { padding: 3 }),
          $(go.TextBlock, { alignment: go.Spot.Right, font: "Bold 12pt Sans-Serif" },
            new go.Binding("text"))
        ),

        //three named ports, one on each side except the top, all output only:
        this.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        this.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
      );

    myDiagram.nodeTemplateMap.add("case",
      $(go.Node, "Table", this.nodeStyle(), new go.Binding("location", "loc", go.Point.parse),
        $(go.Panel, "Auto",
          $(go.Shape, "RoundedRectangle",
            new go.Binding("fill", "color"), {
            // angle: 65,
            // geometryString: "F M140 0 L70 70 0 50z",
            //minSize: new go.Size(80, 80),
            fromSpot: go.Spot.Bottom, toSpot: go.Spot.Top,
            strokeWidth: 0,
            portId: "",
            fromLinkable: true, toLinkable: true
          }),
          $(go.TextBlock, this.textStyle(), { editable: true },
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        this.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        this.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
        this.makePort("R", go.Spot.Right, go.Spot.Right, true, false),
        this.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
      ));

    myDiagram.nodeTemplateMap.add("switch",
      $(go.Node, "Table", this.nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "octagon",
            new go.Binding("fill", "color"), {
            toSpot: go.Spot.Bottom,
            minSize: new go.Size(80, 80),
            strokeWidth: 0
          }),
          $(go.TextBlock, this.textStyle(), { editable: true },
            new go.Binding("text"))
        ),
        this.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
      ));

    myDiagram.nodeTemplateMap.add("for",
      $(go.Node, "Spot",
        $(go.Shape, "Rectangle",
          {
            fill: "",
            minSize: new go.Size(140, 40),
            strokeWidth: 0
          }),
        $(go.Shape, "TriangleLeft", { width: 20, height: 40, fill: "black", alignment: go.Spot.Left }),
        $(go.Shape, "Rectangle", { width: 120, height: 40, fill: "black" }),
        $(go.Shape, "TriangleRight", { width: 20, height: 40, fill: "black", alignment: go.Spot.Right }),
        $(go.TextBlock, this.textStyle(), { text: "Inicio", font: "bold 8pt Helvetica, Arial, sans-serif", position: new go.Point(0, 0) }),
        $(go.TextBlock, this.textStyle(), { editable: true, text: "3", font: "bold 8pt Helvetica, Arial, sans-serif", position: new go.Point(200, 0) }),
        this.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
      ));
    myDiagram.nodeTemplateMap.add("End",
      $(go.Node, "Table", this.nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "Circle", {
            minSize: new go.Size(40, 40),
            fill: "#DC3C00",
            strokeWidth: 0,
            portId: "",
            fromLinkable: true, toLinkable: true
          }),
          $(go.TextBlock, "End", this.textStyle(),
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the bottom, all input only:
        this.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        this.makePort("L", go.Spot.Left, go.Spot.Left, false, true),
        this.makePort("R", go.Spot.Right, go.Spot.Right, false, true)
      ));
    // taken from ../extensions/Figures.js:
    go.Shape.defineFigureGenerator("File", function (shape, w, h) {
      var geo = new go.Geometry();
      var fig = new go.PathFigure(0, 0, true); // starting point
      geo.add(fig);
      fig.add(new go.PathSegment(go.PathSegment.Line, .75 * w, 0));
      fig.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
      fig.add(new go.PathSegment(go.PathSegment.Line, w, h));
      fig.add(new go.PathSegment(go.PathSegment.Line, 0, h).close());
      var fig2 = new go.PathFigure(.75 * w, 0, false);
      geo.add(fig2);
      // The Fold
      fig2.add(new go.PathSegment(go.PathSegment.Line, .75 * w, .25 * h));
      fig2.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
      geo.spot1 = new go.Spot(0, .25);
      geo.spot2 = go.Spot.BottomRight;
      return geo;
    });
    myDiagram.nodeTemplateMap.add("Comment",
      $(go.Node, "Auto", this.nodeStyle(),
        $(go.Shape, "File", {
          fill: "#DEE0A3",
          strokeWidth: 0,
          portId: "",
          fromLinkable: true, toLinkable: true
        }),
        $(go.TextBlock, this.textStyle(), {
          margin: 5,
          maxSize: new go.Size(200, NaN),
          wrap: go.TextBlock.WrapFit,
          textAlign: "center",
          editable: true,
          font: "bold 12pt Helvetica, Arial, sans-serif",
          stroke: '#454545'
        },
          new go.Binding("text").makeTwoWay())
        // no ports, because no links are allowed to connect with a comment
      ));
    // replace the default Link template in the linkTemplateMap
    myDiagram.linkTemplate =
      $(go.Link, // the whole link panel
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 5,
          toShortLength: 4,
          relinkableFrom: true, relinkableTo: true,
          reshapable: true,
          resegmentable: true,
          selectionAdorned: false
        },
        new go.Binding("points").makeTwoWay(),
        $(go.Shape, // the highlight shape, normally transparent
          {
            isPanelMain: true,
            strokeWidth: 8,
            stroke: "transparent",

            name: "HIGHLIGHT"
          }),
        $(go.Shape, // the link path shape
          {
            isPanelMain: true,
            stroke: "gray",

            strokeWidth: 2
          },
          new go.Binding("stroke", "isSelected", function (sel) {
            return sel ? "dodgerblue" : "gray";
          }).ofObject()),
        $(go.Shape, // the arrowhead
          {
            toArrow: "standard",
            strokeWidth: 0,

            fill: "gray"
          }),
        $(go.Panel, "Auto", // the link label, normally not visible
          {
            visible: false,
            name: "LABEL",
            segmentIndex: 2,
            segmentFraction: 0.5
          },
          new go.Binding("visible", "visible").makeTwoWay(),
          $(go.Shape, "RoundedRectangle", // the label shape
            {
              fill: "#F8F8F8",
              strokeWidth: 0
            }),
          $(go.TextBlock, "Yes", // the label
            {
              textAlign: "center",
              font: "10pt helvetica, arial, sans-serif",
              stroke: "#333333",
              editable: true
            },
            new go.Binding("text").makeTwoWay())
        )
      );

    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

    // initialize the Palette that is on the left side of the page

    $(go.Palette, "Diamond", // must name or refer to the DIV HTML element
      {

        nodeTemplateMap: myDiagram.nodeTemplateMap, // share the templates used by myDiagram
        model: new go.GraphLinksModel([ // specify the contents of the Palette
          {
            category: "Start",
            text: "Start",
            color: '#DC3C00'
          },
          {
            category: "Var",
            text: "INT",
            color: 'blue'
          },
          {
            category: "Var",
            text: "CHAR",
            color: 'green'
          },
          {
            category: "Var",
            text: "FLOAT",
            color: 'yellow'
          },
          {
            category: "Var",
            text: "STRING",
            color: 'red'
          },
          {
            category: "Var",
            text: "VECTOR",
            color: 'gray'
          },
          {
            category: "If",
            text: "IF",
            color: 'gray'
          },
          {
            key: 'en',
            category: "switch",
            text: "SWITCH",
            color: 'gray',
            group: 'sw'
          },
          {
            key: 'case',
            category: "case",
            text: "Case",
            color: 'red',

            group: 'sw'
          },

          {
            key: 'sw',
            text: "SWITCH",
            color: 'gray',
            size: "180 300",
            isGroup: true
          },
          {
            key: 'stp',
            text: "Instrucción",
            group: 'sw'
          },
          {
            category: "for",
            color: 'red',
            text: "For"
          },
          {
            text: "Instrucción"
          }, {
            category: "Conditional",
            text: "If-Else"
          }, {
            category: "End",
            text: "End"
          }, {
            category: "Comment",
            text: "Comment"
          }
        ], [
          { from: "en", to: "case" },
          { from: "case", to: "stp" }
        ])
      });

  }


  componentDidMount() {
    //console.log('componentDidMount')
    this.renderCanvas();
  }


  componentWillUpdate(prevProps) {
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
  onClickChange() {
    console.log(myDiagram.model.toJson());
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3' id='Diamond' style={{ 'backgroundColor': '#373737' }}></div>
          <div className='col-md-9 row'>
            <div id='blockWhite' ></div>
            <div ref="goJsDiv" id='goJsDiv' className='col-md-12' style={{ 'width': '500px', 'height': '700px', 'backgroundColor': '#373737' }}>
            </div>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.onClickChange}>Save</button>
        </div>
      </div>
    )
  }


  makePort(name, align, spot, output, input) {
    var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
    // the port is basically just a transparent rectangle that stretches along the side of the node,
    // and becomes colored when the mouse passes over it
    return $(go.Shape, {
      fill: "transparent", // changed to a color in the mouseEnter event handler
      strokeWidth: 0, // no stroke
      width: horizontal ? NaN : 8, // if not stretching horizontally, just 8 wide
      height: !horizontal ? NaN : 8, // if not stretching vertically, just 8 tall
      alignment: align, // align the port on the main Shape
      stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
      portId: name, // declare this object to be a "port"
      fromSpot: spot, // declare where links may connect at this port
      fromLinkable: output, // declare whether the user may draw links from here
      toSpot: spot, // declare where links may connect at this port
      toLinkable: input, // declare whether the user may draw links to here
      cursor: "pointer", // show a different cursor to indicate potential link point

      mouseEnter: function (e, port) { // the PORT argument will be this Shape
        if (!e.diagram.isReadOnly) port.fill = "#00abe469";
      },
      mouseLeave: function (e, port) {
        port.fill = "transparent";
      }
    });
  }


  textStyle() {
    return {
      font: "bold 11pt Helvetica, Arial, sans-serif",
      margin: 2,
      stroke: "whitesmoke"
    }
  }

  nodeStyle() {
    return [
      // The Node.location comes from the "loc" property of the node data,
      // converted by the Point.parse static method.
      // If the Node.location is changed, it updates the "loc" property of the node data,
      // converting back using the Point.stringify static method.
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), {
        // the Node.location is at the center of each node
        locationSpot: go.Spot.Center
      }
    ];
  }

  showLinkLabel(e) {
    var label = e.subject.findObject("LABEL");
    if (label !== null) label.visible = (e.subject.fromNode.data.category === "Conditional");
  }
}


