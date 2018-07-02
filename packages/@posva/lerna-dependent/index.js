const lernaA = require('@posva/lerna-a')
const lernaB = require('@posva/lerna-b')

console.log('Hello, I depend on both packages')
// only I, am updated
console.log(lernaA)
console.log(lernaB)
