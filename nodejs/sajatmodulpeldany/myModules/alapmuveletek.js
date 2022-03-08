function trukk(a, b){
    return 2 * a + b;
}

const honlapom = "https://github.com/";

module.exports.valami = trukk;
//valami néven a trükk elemem exportálása
module.exports.honlapom = honlapom;

module.exports.teddEzt = function( a,b){
    return b-a + 1;
}

