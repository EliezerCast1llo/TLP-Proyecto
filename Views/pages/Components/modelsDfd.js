function modelsData() {
    return [ // specify the contents of the Palette
        {
            category: "Start",
            text: "Start",
            color: '#DC3C00',
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
            color: 'yellow',
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
        {
            category: "If",
            text: "IF",
            color: 'gray',
            fig: "RightTriangle"
        }, {
            key: 'sw',
            category: "switch",
            text: "SWITCH",
            color: 'gray',
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
            color: 'red',
            text: "For",
            cond: "condicion",
            var: "variable",
            act: "accion",
            fig: "start"
        },
        {
            text: "Instrucción",
            fig: "Rectangle"
        }, {
            category: "Conditional",
            text: "If-Else",
            fig: "Diamond"
        }, {
            category: "End",
            text: "End",
            fig: "Circle"
        }, {
            category: "Comment",
            text: "Comment",
            fig: "File"
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