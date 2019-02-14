const { Map, List } = require('immutable-ext')
const Sum = require('./modules/monoids')

// const res = Map({ brian: Sum(3), sara: Sum(5)})
//             .fold(Sum.empty())

// const res = List.of(Sum(1), Sum(2), Sum(3))
//             .fold(Sum.empty())

// const res = List.of(1, 2, 3)
//             .map(Sum)
//             .fold(Sum.empty())

const res = List.of(1, 2, 3)
            .map(Sum)
            .fold(Sum.empty())
            
console.log(res.toString())