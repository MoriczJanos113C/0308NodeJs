const trukk = require('./myModules/alapmuveletek');
const hiper = require('./myModules/superHiperModul');
const irsz = require('./myModules/iranyitoszam');

console.log(trukk.valami( 5, 1 ));

console.log( trukk.honlapom );

console.log(trukk.teddEzt( 5, 3));

console.log(hiper.valami( 6, 8));

console.log(hiper.pi);

irsz.irszTeszt(4400);
irsz.irszTeszt(1117);
irsz.irszTeszt(1532);