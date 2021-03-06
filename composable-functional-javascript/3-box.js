const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: () => `Box(${x})`
})

const nextCharForNumberString = str => 
    Box(str)
    .map(s => s.trim())
    .map(s => new Number(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase());

const result = nextCharForNumberString('  64  ');

console.log(String(result));
module.exports = Box;