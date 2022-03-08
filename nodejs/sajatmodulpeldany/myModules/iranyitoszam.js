module.exports.irszTeszt = function (irsz){
    if( irsz >= 2000){
        console.log("az adott irsz nem budapesthez tartozik");
        return;
    }
    const kerulet = irsz.substr(1, 3);
    if( kerulet > 24 ){
        console.log(`a pesti irsz a ${kerulet} nem található`);
    } else{
        console.log("bár budapesti de nem kerülethez tartozó irsz");
    }

} 


//szöveg karakter, mennyi kari megszamolja a szovegben
//két szot adunk at a fuggvenyben, két szot osszefuzi, és felváéltva kicsi és nagy betusse alakitja(egy kis betu egy nagy betu)

//3 adat a json fileba es az az adatbazisba