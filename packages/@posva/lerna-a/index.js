const cows = require('cows')()

// updating a sub dependency

console.log('Hello from module A')
console.log(cows[Math.floor(Math.random() * cows.length)])

module.exports = 'I am module A'
