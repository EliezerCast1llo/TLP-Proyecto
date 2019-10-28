function modelsData() {
    return [ // specify the contents of the Palette
        {
            category: "Start",
            text: "Start",
            color: '#C0CA33',
            fig: "Circle"
        },
        {
            category: "Var",
            text: "INT",
            color: 'blue',
            fig: "square",
            height: "100"
        },
        {
            category: "Var",
            text: "CHAR",
            color: 'green',
            fig: "square",
            height: "100"
        },
        {
            category: "Var",
            text: "FLOAT",
            color: '#F1C40F',
            fig: "square",
            height: "100"
        },
        {
            category: "Var",
            text: "STRING",
            color: 'red',
            fig: "square",
            height: "100"
        },
        {
            category: "Var",
            text: "VECTOR",
            color: 'gray',
            fig: "square",
            height: "100"
        },
        /*{
            category: "If",
            text: "IF",
            color: 'gray',
            fig: "RightTriangle"
        }, */{
            key: 'sw',
            category: "switch",
            text: "SWITCH",
            color: '#2980B9',
            fig: "octagon"
        },
        /*{
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
        },*/
        {
            category: "for",
            color: '#7D3C98',
            text: "For",
            cond: "i<array.legth",
            var: "i=0",
            act: "i++",
            fig: "start"
        },
        {
            category: "Step",
            text: "instruction",
            color: "#DC7633",
            fig: "Rectangle"
        }, {
            category: "Conditional",
            text: "If-Else",
            color: "#117A65",
            fig: "Diamond"
        }, {
            category: "End",
            text: "End",
            color: "#641E16",
            fig: "Circle"
        }, /*{
            category: "Comment",
            text: "Comment",
            fig: "File"
        },*/
        {
            category: "EndBlock",
            color: "#C2185B",
            text: "EndBlock",
            count: 0,
            fig: "Delay"
        }
        ,
        {
            category: "While",
            color: "blue",
            text: "While",
            count: 0,
            fig: "start"
        }
    ]
}

function modelsLinks() {
    return [
        { from: "en", to: "case" },
        { from: "case", to: "stp" }
    ]
}

module.exports = { modelsData, modelsLinks }