import go from 'gojs';
const $ = go.GraphObject.make;

function linkTemplate() {
    let template = $(go.Link, // the whole link panel
        {
            routing: go.Link.AvoidsNodes,
            curve: go.Link.JumpOver,
            corner: 5,
            toShortLength: 4,
            relinkableFrom: true,
             relinkableTo: true,
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
                stroke: "white",
                strokeWidth: 2
            },
            new go.Binding("stroke", "isSelected", function (sel) {
                return sel ? "dodgerblue" : "white";
            }).ofObject()),
        $(go.Shape, // the arrowhead
            {
                toArrow: "standard",
                strokeWidth: 0,
                fill: "white"
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
    return template;
}

function makePort(name, align, spot, output, input) {
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


function showLinkLabel(e) {
    var label = e.subject.findObject("LABEL");
    if (label !== null) label.visible = (e.subject.fromNode.data.category === "Conditional");
}

function nodeStyle() {
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

function textStyle() {
    return {
        font: "bold 11pt Helvetica, Arial, sans-serif",
        margin: 2,
        stroke: "whitesmoke"
    }
}

module.exports = {
    linkTemplate,
    makePort,
    showLinkLabel,
    nodeStyle,
    textStyle
}