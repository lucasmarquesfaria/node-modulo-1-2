// bom para fazer console de erros

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Durante')
})

console.log('Antes')

EventEmitter.EventEmitter('start')

console.log('Depois')