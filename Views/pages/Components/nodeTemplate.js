import go from 'gojs'
import functionDfd from './functionsDfd'

const $ = go.GraphObject.make;

// the default category
function defaultGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(go.Panel, "Auto",
            $(go.Shape, "Rectangle",
                new go.Binding("fill", "color"),
                new go.Binding("figure", "fig"),
                {
                    fill: "#00A9C9",
                    strokeWidth: 0,
                    portId: "",
                    fromLinkable: true,
                    minSize: new go.Size(60, 60),
                    maxSize: new go.Size(100, 100),
                    toLinkable: true
                },
            ),
            $(go.TextBlock, functionDfd.textStyle(), {
                editable: true,
                textAlign: "center",
            }, new go.Binding("text").makeTwoWay())
        ),
        // four named ports, one on each side:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
    )
}

function conditionalGraph() {
    /* myDiagram.model.addNodeData({
         text: "Instrucción",
         fig: "Rectangle"
     });*/
    let defaultAdornment =
        $(go.Adornment, "Spot",
            $(go.Panel, "Auto",
                $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
                $(go.Placeholder)),
            // the button to create a "next" node, at the top-right corner
            $("Button",
                {
                    alignment: go.Spot.TopRight,
                    click: addNodeAndLink
                },  // this function is defined below
                new go.Binding("visible", "", function (a) { return !a.diagram.isReadOnly; }).ofObject(),
                $(go.Shape, "PlusLine", { desiredSize: new go.Size(6, 6) })
            )
        );
    return $(go.Node, "Spot", functionDfd.nodeStyle(), { locationSpot: go.Spot.Center, selectionAdornmentTemplate: defaultAdornment },
        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(go.Panel, "Auto",
            $(go.Shape, "Diamond",
                new go.Binding("fill", "color"),
                {
                    strokeWidth: 0,
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
            $(go.TextBlock, functionDfd.textStyle(), {
                margin: 8,
                editable: true
            },
                new go.Binding("text").makeTwoWay())
        ),

        // four named ports, one on each side:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.Left, true, true),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

function startGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "Circle",
                new go.Binding("fill", "color"),
                {
                    minSize: new go.Size(60, 60),
                    strokeWidth: 0,
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
            $(go.TextBlock, "Start", functionDfd.textStyle(),
                new go.Binding("text"))
        ),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}


function varGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "square",
                new go.Binding("fill", "color"), {
                minSize: new go.Size(40, 40),
                strokeWidth: 0,
                portId: "",
                fromLinkable: true,
                toLinkable: true
            }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text").makeTwoWay())
        ),
        // three named ports, one on each side except the top, all output only:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
    )
}

function ifGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "RightTriangle",
                new go.Binding("fill", "color"), {
                minSize: new go.Size(80, 80),
                strokeWidth: 0,
                portId: "",
                fromLinkable: true,
                toLinkable: true
            }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.Right, true, false),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

function caseGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        new go.Binding("location", "loc", go.Point.parse),
        $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle",
                new go.Binding("fill", "color"), {
                fromSpot: go.Spot.Bottom,
                toSpot: go.Spot.Top,
                strokeWidth: 0,
                portId: "",
                fromLinkable: true, toLinkable: true
            }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.Right, true, false),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

function switchGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "octagon",
                new go.Binding("fill", "color"), {
                toSpot: go.Spot.Bottom,
                minSize: new go.Size(80, 80),
                strokeWidth: 0
            }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text"))
        ),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

function forGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Shape, "start",
            new go.Binding("fill", "color"),
            {
                minSize: new go.Size(80, 30),
                maxSize: new go.Size(190, 70),
                strokeWidth: 0
            }),
        $(go.TextBlock, functionDfd.textStyle(),
            {
                text: "Variable:", stroke: "black",
                alignment: new go.Spot(0.25, 0.2)
            }
        ),
        $(go.TextBlock,
            {
                stroke: "black",
                editable: true,
                alignment: new go.Spot(0.6, 0.2)
            },
            new go.Binding("text", "var").makeTwoWay()
        ),
        $(go.TextBlock, functionDfd.textStyle(),
            {
                text: "Condition:",
                stroke: "black",
                alignment: new go.Spot(0.25, 0.5)
            }
        ),
        $(go.TextBlock,
            {
                stroke: "black",
                editable: true,
                alignment: new go.Spot(0.7, 0.5)
            },
            new go.Binding("text", "cond").makeTwoWay()
        ),
        $(go.TextBlock, functionDfd.textStyle(), { text: "Step:", stroke: "black", alignment: new go.Spot(0.25, 0.8) }),
        $(go.TextBlock,
            {
                stroke: "black",
                editable: true,
                alignment: new go.Spot(0.6, 0.8)
            },
            new go.Binding("text", "act").makeTwoWay()
        ),

        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

function endGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "Circle",
                new go.Binding("fill", "color"),
                {
                    minSize: new go.Size(60, 60),
                    strokeWidth: 0,
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
            $(go.TextBlock, "End", functionDfd.textStyle(),
                new go.Binding("text"))
        ),
        // three named ports, one on each side except the bottom, all input only:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
    )
}

function commentGraph() {
    return $(go.Node, "Auto", functionDfd.nodeStyle(),
        $(go.Shape, "File", {
            fill: "#DEE0A3",
            strokeWidth: 0,
            portId: "",
            fromLinkable: true,
            toLinkable: true
        }),
        $(go.TextBlock, functionDfd.textStyle(), {
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
    )
}

function groupGraph() {
    return $(go.Group, "Auto", {
        resizable: true,
        resizeObjectName: "PH"
    },
        $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle",
                {
                    fill: "rgba(128,128,128,0.33)",
                    name: "PH",
                    strokeWidth: 2
                }),
            $(go.Placeholder,    // represents the area of all member parts,
                { padding: 3 }),
            $(go.TextBlock, {  font: "Bold 12pt Sans-Serif" },
                new go.Binding("text"))
        ),

        //three named ports, one on each side except the top, all output only:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

function addNodeAndLink(e, obj) {
    let adorn = obj.part;

    if (adorn === null) return;
    e.handled = true;
    let diagram = adorn.diagram;

    diagram.startTransaction("Add State");
    // get the node data for which the user clicked the button
    let fromNode = adorn.adornedPart;

    let fromData = fromNode.data;
    // create a new "State" data object, positioned off to the right of the adorned Node
    let toData = { text: "instruccion", category: "Step", color: "#DC7633" };
    let p = fromNode.location;
    console.log(p);
    toData.loc = p.x + " " + p.y - 195;  // the "loc" property is a string, not a Point object
    // add the new node data to the model
    let model = diagram.model;
    model.addNodeData(toData);
    // create a link data from the old node data to the new node data
    let linkdata = {};
    linkdata[model.linkFromKeyProperty] = model.getKeyForNodeData(fromData);
    linkdata[model.linkToKeyProperty] = model.getKeyForNodeData(toData);
    // and add the link data to the model
    model.addLinkData(linkdata);
    // select the new Node
    let newnode = diagram.findNodeForData(toData);

    diagram.select(newnode);
    diagram.commitTransaction("Add State");
}


function endBlockGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "Delay",
                new go.Binding("fill", "color"),
                {
                    minSize: new go.Size(40, 40),
                    strokeWidth: 0,
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text").makeTwoWay())
        ),

        functionDfd.makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
    )
}

function stepGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "Rectangle",
                new go.Binding("fill", "color"),
                {
                    minSize: new go.Size(40, 40),
                    strokeWidth: 0,
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text").makeTwoWay())
        ),

        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}


function whileGraph() {
    return $(go.Node, "Spot", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "start",
                new go.Binding("fill", "color"),
                {
                    minSize: new go.Size(40, 40),
                    strokeWidth: 0,
                    portId: "",
                    fromLinkable: true,
                    toLinkable: true
                }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text").makeTwoWay())
        ),

        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

module.exports = {
    defaultGraph,
    conditionalGraph,
    startGraph,
    varGraph,
    ifGraph,
    caseGraph,
    switchGraph,
    forGraph,
    endGraph,
    commentGraph,
    groupGraph,
    addNodeAndLink,
    endBlockGraph,
    stepGraph,
    whileGraph

}