import go from 'gojs'
import functionDfd from './functionsDfd'

const $ = go.GraphObject.make;

// the default category
function defaultGraph() {
    return $(go.Node, "Table", functionDfd.nodeStyle(),
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
            $(go.TextBlock, functionDfd.textStyle(), {
                margin: 8,
                maxSize: new go.Size(160, NaN),
                wrap: go.TextBlock.WrapFit,
                editable: true
            },
                new go.Binding("text").makeTwoWay())
        ),
        // four named ports, one on each side:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
    )
}

function conditionalGraph() {
    return $(go.Node, "Table", functionDfd.nodeStyle(),
        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(go.Panel, "Auto",
            $(go.Shape, "Diamond", {
                fill: "#00A9C9",
                strokeWidth: 0,
                portId: "",
                fromLinkable: true, toLinkable: true
            },
                new go.Binding("figure", "figure")),
            $(go.TextBlock, functionDfd.textStyle(), {
                margin: 8,
                maxSize: new go.Size(160, NaN),
                wrap: go.TextBlock.WrapFit,
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
    return $(go.Node, "Table", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "Circle",
                new go.Binding("fill", "color"), {
                minSize: new go.Size(40, 40),
                strokeWidth: 0,
                portId: "",
                fromLinkable: true, toLinkable: true
            }),
            $(go.TextBlock, "Start", functionDfd.textStyle(),
                new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        /* this.makePort("L", go.Spot.Left, go.Spot.Left, true, false),
         this.makePort("R", go.Spot.Right, go.Spot.Right, true, false),*/
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}


function varGraph() {
    return $(go.Node, "Table", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "square",
                new go.Binding("fill", "color"), {
                minSize: new go.Size(40, 40),
                strokeWidth: 0,
                portId: "",
                fromLinkable: true, toLinkable: true
            }),
            $(go.TextBlock, functionDfd.textStyle(), { editable: true },
                new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
    )
}

function ifGraph() {
    return $(go.Node, "Table", functionDfd.nodeStyle(),
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
    return $(go.Node, "Table", functionDfd.nodeStyle(), new go.Binding("location", "loc", go.Point.parse),
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
    return $(go.Node, "Table", functionDfd.nodeStyle(),
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
    return $(go.Node, "Spot",
        $(go.Shape, "Rectangle",
            {
                fill: "",
                minSize: new go.Size(140, 40),
                strokeWidth: 0
            }),
        $(go.Shape, "TriangleLeft", { width: 20, height: 40, fill: "black", alignment: go.Spot.Left }),
        $(go.Shape, "Rectangle", { width: 120, height: 40, fill: "black" }),
        $(go.Shape, "TriangleRight", { width: 20, height: 40, fill: "black", alignment: go.Spot.Right }),
        $(go.TextBlock, functionDfd.textStyle(), { text: "Inicio", font: "bold 8pt Helvetica, Arial, sans-serif", position: new go.Point(0, 0) }),
        $(go.TextBlock, functionDfd.textStyle(), { editable: true, text: "3", font: "bold 8pt Helvetica, Arial, sans-serif", position: new go.Point(200, 0) }),
        functionDfd.makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
}

function endGraph() {
    return $(go.Node, "Table", functionDfd.nodeStyle(),
        $(go.Panel, "Auto",
            $(go.Shape, "Circle", {
                minSize: new go.Size(40, 40),
                fill: "#DC3C00",
                strokeWidth: 0,
                portId: "",
                fromLinkable: true, toLinkable: true
            }),
            $(go.TextBlock, "End", functionDfd.textStyle(),
                new go.Binding("text"))
        ),
        // three named ports, one on each side except the bottom, all input only:
        functionDfd.makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        functionDfd.makePort("L", go.Spot.Left, go.Spot.Left, false, true),
        functionDfd.makePort("R", go.Spot.Right, go.Spot.Right, false, true)
    )
}

function commentGraph() {
    return $(go.Node, "Auto", functionDfd.nodeStyle(),
        $(go.Shape, "File", {
            fill: "#DEE0A3",
            strokeWidth: 0,
            portId: "",
            fromLinkable: true, toLinkable: true
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
                },
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)),
            $(go.Placeholder,    // represents the area of all member parts,
                { padding: 3 }),
            $(go.TextBlock, { alignment: go.Spot.Right, font: "Bold 12pt Sans-Serif" },
                new go.Binding("text"))
        ),

        //three named ports, one on each side except the top, all output only:
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
    groupGraph
}