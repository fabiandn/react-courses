const Box = require('../modules/box')
const Task = require('data.task')
const Either = require('../modules/either')
const {Right, Left, fromNullable} = Either
const {List, Map} = require('immutable-ext')

//fx.map(f).map(g) == fx.map(x=> g(f(x)))
//fx.map(id) == id(fx)

// const res1 = Box('squirrels')
//              .map(s => s.substr(5))
//              .map(s => s.toUpperCase())

// const res2 = Box('squirrels')
//              .map(s => s.substr(5).toUpperCase())

const id = x => x

const res1 = List.of('crayons').map(id)
const res2 = id(List.of('crayons'))

console.log(res1.toString(), res2.toString());