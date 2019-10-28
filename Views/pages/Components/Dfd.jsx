import React, { Component } from 'react';
import go from 'gojs';
import './figure';
import dataModels from './modelsDfd'
import functionDfd from './functionsDfd'
import nodeTemplate from './nodeTemplate'
import connectionsApi from '../Functions/connectionsApi'
import { Modal, Button } from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';

const $ = go.GraphObject.make;
var myDiagram, myPalette;
export default class GoJs extends Component {
  constructor(props) {
    super(props);
    this.renderCanvas = this.renderCanvas.bind(this);
    this.state = { myModel: null, showSave: false, show: false, data: [], nameFile: "" }
  }

  renderCanvas() {
    myDiagram = $(go.Diagram, this.refs.goJsDiv, {
      grid: $(go.Panel, "Grid",
        $(go.Shape, "LineH", { stroke: "gray", strokeWidth: 0.3, interval: 2 }),
        $(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.3, interval: 2 })
      ),
      viewSize: new go.Size(900, 900),
      "LinkDrawn": functionDfd.showLinkLabel,  // this DiagramEvent listener is defined below
      "LinkRelinked": functionDfd.showLinkLabel,
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      "draggingTool.isGridSnapEnabled": true,
      "undoManager.isEnabled": true  // enable undo & redo
    }
    );
    // replace the default Link template in the linkTemplateMap
    myDiagram.linkTemplate = functionDfd.linkTemplate();

    myDiagram.model = new go.GraphLinksModel(this.props.data, this.props.links);

    //define the Node templates for regular nodes
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
    myDiagram.nodeTemplateMap.add("EndBlock", nodeTemplate.endBlockGraph());
    myDiagram.nodeTemplateMap.add("Step", nodeTemplate.stepGraph());
    myDiagram.nodeTemplateMap.add("While", nodeTemplate.whileGraph());

    myDiagram.groupTemplate = nodeTemplate.groupGraph();

    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

    // initialize the Palette that is on the left side of the page
    myPalette = $(go.Palette, "palette") // must name or refer to the DIV HTML element
    myPalette.nodeTemplate = nodeTemplate.defaultGraph();
    myPalette.model = new go.GraphLinksModel(dataModels.modelsData(), dataModels.modelsLinks());
    myPalette.layout = $(go.GridLayout, { wrappingColumn: 2, wrappingWidth: 400 });
  }

  componentDidMount() {
    this.renderCanvas();
  }

  /*
    UNSAFE_componentWillUpdate(prevProps) {
  
    }*/
  //Cerrar ventanas de modal.
  handleClose = (type, e) => {
    if (type === "run") this.setState({ show: false })
    else this.setState({ showSave: false })
  }

  handleShow = async (type, e) => { /// Se activa al momento de dar click en el boton de ejecutar o Guardar
    if (type === "run") {
      //Se hace la peticion al servidor para ejecutar la compilacion
      let response = await connectionsApi.runCompilete(myDiagram.model.toJson(), this.state.nameFile);
      if (response.status === 200) this.setState({ show: true, data: response.analisis });
    } else this.setState({ showSave: true })
  }

  saveFile = async (e) => { /// Se activa al momento de dar click en el boton de ejecutar
    await connectionsApi.savingFile(myDiagram.model.toJson(), this.state.nameFile);
    this.setState({ showSave: false });
  }

  handleChange = (e) => {
    this.setState({ nameFile: e.target.value });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3' id='palette' style={{ 'backgroundColor': '#BDC3C7' }}></div>
            <div className='col-md-9'>
              <div ref="goJsDiv" id='goJsDiv' className='col-md-12' style={{ 'height': '715px', 'backgroundColor': '#BDC3C7' }}>
              </div>
              <Fab aria-label="add" onClick={(e) => this.handleShow("run", e)} style={{ background: "green", position: 'fixed', display: "block", top: "200px", right: "50px" }}>
                Run
              </Fab>
              <Fab aria-label="add" onClick={(e) => this.handleShow("save", e)} style={{ background: "blue", position: 'fixed', display: "block", top: "300px", right: "50px" }}>
                Save
              </Fab>
            </div>
          </div>
        </div>

        {/*/Modal de resultado de analsis lexico*/}
        <Modal show={this.state.show} onHide={(e) => this.handleClose("run", e)}>
          <Modal.Header closeButton>
            <Modal.Title>Análisis Lexico</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.data.map(this.printAnalisisLexico)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => this.handleClose("run", e)}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/**Modal para agregar el nombre del archivo */}
        <Modal show={this.state.showSave} onHide={(e) => this.handleClose("save", e)}>
          <Modal.Header closeButton>
            <Modal.Title>Guardar Archivo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Nombre</span>
              </div>
              <input type="text" className="form-control"
                onChange={this.handleChange}
                value={this.state.nameFile}
                placeholder="MyDiagram"
                aria-label="Username"
                aria-describedby="basic-addon1" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.saveFile}>Guardar</Button>
            <Button variant="secondary" onClick={(e) => this.handleClose("save", e)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  //Funcion para imprimir el analsis lexicografico
  printAnalisisLexico(item, index) {
    return (
      <div className='row' key={index}>
        <h5 className='col-4 col-sm-4 col-md-4  col-lg-4'>{item.lexema}</h5>
        <h5 className='col-3 col-sm-3 col-md-3  col-lg-3'>-------></h5>
        <h5 className='col-5 col-sm-5 col-md-5  col-lg-5'>{item.token}</h5>
      </div>
    )

  }
}


