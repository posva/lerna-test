// comment
const cows = require('cows')()

console.log('Hello from module B')
console.log(cows[Math.floor(Math.random() * cows.length)])

module.exports = 'I am module B'
