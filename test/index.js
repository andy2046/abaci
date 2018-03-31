const {
  precise,
  multiply,
  divide,
  plus,
  minus,
  round
} = require('../dist/abaci')

console.log(precise(1.0000000000000001))
//=> 1
console.log(precise(0.09999999999999998))
//=> 0.1

console.log(0.1 + 0.2)
//=> 0.30000000000000004
console.log(plus(0.1, 0.2))
//=> 0.3
console.log(plus(-1.7, -1))
// -2.7
console.log(plus(2.018, 0.001))
// 2.019
console.log(plus(1.2334e10, 1.3445e3))
// 12334001344.5

console.log(1.0 - 0.9)
//=> 0.09999999999999998
console.log(minus(1.0, 0.9))
//=> 0.1
console.log(minus(0.07, 0.01))
//=> 0.06
console.log(minus(-1, -0))
//=> -1
console.log(minus(1, 22))
//=> -21
console.log(minus(1.23e-5, 1.0023))
//=> -1.0022877

console.log(multiply(2.5, -0.92))
//=> -2.3
console.log(multiply(8.0, -0.3625))
//=> -2.9
console.log(multiply(-1.23e4, 20))
//=> -246000

console.log(divide(1.21, 1.1))
//=> 1.1
console.log(divide(36.2, 0.362))
//=> 100
console.log(divide(-1.23e4, 20))
//=> -615
console.log(divide(-2.9, 8.0))
//=> -0.3625

console.log(round(0.7875, 3))
//=> 0.788
console.log(round(0.105, 2))
//=> 0.11
console.log(round(1.2345e3, 3))
//=> 1234.5
