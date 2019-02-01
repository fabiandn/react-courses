const { Map } = require('immutable-ext')

const Sum = x => ({
    x,
    concat: ({x: y}) =>
        Sum(x + y),
    toString: () => 
        `Sum(${x})`
})

const All = x => ({
    x,
    concat: ({x: y}) =>
        All(x && y),
    toString: () => 
        `All(${x})`
})

const First = x => ({
    x,
    concat: ({x: y}) =>
        First(x),
    toString: () => 
        `First(${x})`
})

const acct1 = Map({ name: First('Nico')})