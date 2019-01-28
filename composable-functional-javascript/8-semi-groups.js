// const res = "a".concat("b").concat("c");
// const res = "a".concat("b".concat("c"));
// 

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

const resSum = Sum(1).concat(Sum(2))
const resAll = All(true).concat(All(false))
const resFirst = First("5").concat(First("1"))

console.log(resSum.toString())
console.log(resAll.toString())
console.log(resFirst.toString())