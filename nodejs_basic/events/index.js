// TODO 1
const { EventEmitter } = require('events');

// TODO 3
const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}
// TODO 2
const myEmitter = new EventEmitter();
myEmitter.on('birthday', birthdayEventListener);
myEmitter.emit('birthday', 'Boy');

