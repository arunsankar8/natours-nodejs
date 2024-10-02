const EventEmitter = require('events');

class Sales extends EventEmitter{

    constructor() {
        super();
    }


}
const event = new Sales();


event.on('newsale', () => {
    console.log('newsale done');
    
});

event.emit('newsale');