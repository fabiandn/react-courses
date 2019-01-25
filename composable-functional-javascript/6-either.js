const Right = x => ({
    map: f => Right(f(x)),
    chain: f => f(x),
    fold: (f, g) => g(x),
    toString: () => `Right(${x})`
});

const Left = x => ({
    map: f => Left(x),
    chain: f => Left(x),
    fold: (f, g) => f(x),
    toString: () => `Left(${x})`
});

const fromNullable = x =>
    x != null ? Right(found) : Left(null);

const fs = require('fs');

const tryCatch = f => {
    try {
        return Right(f());
    } catch(e) {
        return Left(e);
    }
}

const getPort = () => 
    tryCatch(() => fs.readFileSync('config.json'))
    .chain(str => tryCatch(() => JSON.parse(str)))
    .fold(e=> 3000,
        c => c.port);

const result = getPort();

console.log(result);
