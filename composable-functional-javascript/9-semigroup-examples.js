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

const acct1 = Map({ 
    name: First('Nico'), 
    isPaid: All(true), 
    points: Sum(10),
    friends: ['Franklin']
});

const acct2 = Map({ 
    name: First('Nico'), 
    isPaid: All(false), 
    points: Sum(2),
    friends: ['Gatsby']
});

const result = acct1.concat(acct2);
console.log(result.toJS());
