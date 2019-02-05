const { Map } = require('immutable-ext')

const Sum = x => ({
    x,
    concat: ({x: y}) =>
        Sum(x + y),
    toString: () => 
        `Sum(${x})`
})

Sum.empty = () => Sum(0);

const resSum = Sum.empty().concat(Sum(1).concat(Sum(2)))

console.log(resSum.toString())

const All = x => ({
    x,
    concat: ({x: y}) =>
        All(x && y),
    toString: () => 
        `All(${x})`
});

All.empty = () => All(true);

const resAll = All.empty().concat(All(true).concat(All(true)))
console.log(resAll.toString())

const First = x => ({
    x,
    concat: ({x: y}) =>
        First(x),
    toString: () => 
        `First(${x})`
})

const sum = xs =>
    xs.reduce((acc, x) => acc + x, 0)

const all = xs =>
    xs.reduce((acc, x) => acc && x, true)

const first = xs =>
    xs.reduce((acc, x) => acc)
console.log(first([1,2,3,4]));
