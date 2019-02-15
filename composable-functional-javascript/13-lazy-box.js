const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: () => `Box(${x})`
});

const LazyBox = g => ({
    map: f => LazyBox(() => f(g())),
    fold: f => f(g()),
    toString: () => `Box(${g()})`
})

const result = LazyBox(() => '  64 ')
                .map(abba => abba.trim())
                .map(trimmed => new Number(trimmed))
                .map(number => number + 1)
                .map(x => String.fromCharCode(x))
                .fold(x => x.toLowerCase())

console.log(String(result));
