function modelsData() {
    return [ // specify the contents of the Palette
        {
            category: "Start",
            text: "Start",
            color: '#DC3C00',
            loc:"50 30"
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
    ]
}

function modelsLinks() {
    return [
        { from: "en", to: "case" },
        { from: "case", to: "stp" }
    ]
}

module.exports = { modelsData, modelsLinks }