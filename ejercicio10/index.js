const moduloMate = require('./controller.js');

const aumentar1 = moduloMate.suma(1,2);
console.log(aumentar1);

const aumentar2 = moduloMate.suma(4,5);
console.log(aumentar2);

const multi = moduloMate.multiplica(aumentar1,aumentar2);
console.log(multi);