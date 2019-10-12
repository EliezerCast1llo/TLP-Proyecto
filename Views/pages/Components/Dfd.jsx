import React, { Component } from 'react';
import go from 'gojs';
//import './App.css';
import './figure';
import dataModels from './modelsDfd'
import functionDfd from './functionsDfd'
import nodeTemplate from './nodeTemplate'

const $ = go.GraphObject.make;
var myDiagram, myPalette;
export default class GoJs extends Component {
  constructor(props) {
    super(props);
    this.renderCanvas = this.renderCanvas.bind(this);
    this.state = { myModel: null, myDiagram: null }
  }

  renderCanvas() {
    myDiagram = $(go.Diagram, this.refs.goJsDiv, {
     /* grid: $(go.Panel, "Grid",
        // $(go.Shape, "LineH", { stroke: "transparent", strokeWidth: .9 }),
        $(go.Shape, "LineH", { stroke: "gray", strokeWidth: 0.3, interval: 2 }),
        //$(go.Shape, "LineV", { stroke: "transparent", strokeWidth: .9 }),
        $(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.3, interval: 2 })
      ),*/
      "LinkDrawn": functionDfd.showLinkLabel,  // this DiagramEvent listener is defined below
      "LinkRelinked": functionDfd.showLinkLabel,
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      "draggingTool.isGridSnapEnabled": true,
      "undoManager.isEnabled": true  // enable undo & redo
    }
    );

    // define the Node templates for regular nodes
    myDiagram.nodeTemplateMap.add("", nodeTemplate.defaultGraph());  // the default category
    myDiagram.nodeTemplateMap.add("Conditional", nodeTemplate.conditionalGraph());
    myDiagram.nodeTemplateMap.add("Start", nodeTemplate.startGraph());
    myDiagram.nodeTemplateMap.add("Var", nodeTemplate.varGraph());
    myDiagram.nodeTemplateMap.add("If", nodeTemplate.ifGraph());
    myDiagram.nodeTemplateMap.add("case", nodeTemplate.caseGraph());
    myDiagram.nodeTemplateMap.add("switch", nodeTemplate.switchGraph());
    myDiagram.nodeTemplateMap.add("for", nodeTemplate.forGraph());
    myDiagram.nodeTemplateMap.add("End", nodeTemplate.endGraph());
    myDiagram.nodeTemplateMap.add("Comment", nodeTemplate.commentGraph());

    myDiagram.groupTemplate = nodeTemplate.groupGraph();

    // replace the default Link template in the linkTemplateMap
    myDiagram.linkTemplate = functionDfd.linkTemplate();

    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

    // initialize the Palette that is on the left side of the page

    myPalette = $(go.Palette, "palette")/*, // must name or refer to the DIV HTML element
      {

        nodeTemplateMap: myDiagram.nodeTemplateMap, // share the templates used by myDiagram
        model: new go.GraphLinksModel(dataModels.modelsData(), dataModels.modelsLinks())
      });*/

    /*myPalette.nodeTemplateMap.add("Conditional", nodeTemplate.conditionalGraph());
    myPalette.nodeTemplateMap.add("Start", nodeTemplate.startGraph());
    myPalette.nodeTemplateMap.add("Var", nodeTemplate.varGraph());
    myPalette.nodeTemplateMap.add("If", nodeTemplate.ifGraph());
    myPalette.nodeTemplateMap.add("case", nodeTemplate.caseGraph());
    myPalette.nodeTemplateMap.add("switch", nodeTemplate.switchGraph());
    myPalette.nodeTemplateMap.add("for", nodeTemplate.forGraph());
    myPalette.nodeTemplateMap.add("End", nodeTemplate.endGraph());
    myPalette.nodeTemplateMap.add("Comment", nodeTemplate.commentGraph());*/
    myPalette.nodeTemplate = nodeTemplate.defaultGraph();
    myPalette.model = new go.GraphLinksModel(dataModels.modelsData(), dataModels.modelsLinks());
    myPalette.layout = $(go.GridLayout,
      {
        wrappingColumn: 2,
        wrappingWidth: 400
      });
    // After the layout, output results:
    myDiagram.addDiagramListener('TextEdited', function () {
      console.info("CHANGE DIAGRAM ",myDiagram.model.toJSON());
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
          <div className='col-md-3' id='palette' style={{ 'backgroundColor': '#ECF6FF' }}></div>
          <div className='col-md-9 row'>
            <div id='blockWhite' ></div>
            <div ref="goJsDiv" id='goJsDiv' className='col-md-12' style={{ 'width': '500px', 'height': '700px', 'backgroundColor': '#ECF6FF' }}>
            </div>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.onClickChange}>Save</button>
        </div>
      </div>
    )
  }
}


