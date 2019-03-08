const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: () => `Right(${x})`
});

const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    toString: () => `Left(${x})`
});

const fromNullable = x =>
    x != null ? Right(found) : Left(null);

module.exports = Right;
module.exports = Left;
module.exports = fromNullable;
