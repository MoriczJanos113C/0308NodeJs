/*
hf
ennek a tervezesnek mintajara
egy végtelen nagysagu parkolohaz be es kiengedo kapujat kell leprogramozni addig h a tervet el kell kesziteni (backend tervet), beengedes rendzsam alapjan illetve ido belyeget teszunk a beengedeshez, amikor pedig kimegy az auto akkor ki kell torolni (azaz elment a parkolohazbol)
modositas muveletre utvonal = rendszamot modositani
keresni autora v idopontra idobelyeg, rendszam alapjan
teljes mw struktura ennek alapjan
postman teszteket elo kesziteni

hf
index.js, route.js oltoztetni fel megjegyzesekkel, mit milrt
*/

const uuid = require('uuid');//uuid modul meghivasa

const rendszamokListajaMw = require('../middleWare/rendszamoklistaja');
const rendszamMw = require('../middleWare/rendszam');
const ujRendszamMw = require('../middleWare/ujrendszam');
const egyRendszamMw = require('../middleWare/egyrendszam');
const rendszamKeresMw = require('../middleWare/rendszamkeres');
const rendszamModositasMw = require('../middleWare/rendszammodositas');

function addRoutes(app, db, myModel){//addroute function letrehozása és hozzá 3 paraméter
    //myMode= model, db = adatbazis, uuid= id megadása
    
    const objRep = { //ez a modul
        myModel,
        db,
        uuid
    }

    app.get('/etelek', rendszamokListajaMw(objRep)); //module meghivasa bele megadni a modelt 
    app.get('/etel/:id', rendszamMw(objRep));//module meghivasa bele megadni a modelt 
    app.post('/etel', ujRendszamMw(objRep));//module meghivasa bele megadni a modelt 
    app.delete('/etel/:id', rendszamMw(objRep), egyRendszamMw(objRep));//module meghivasa bele megadni a modelt 
    app.post('/search', rendszamKeresMw(objRep));//module meghivasa bele megadni a modelt 
    app.patch('/etel/:id', rendszamMw(objRep), rendszamModositasMw(objRep));//module meghivasa bele megadni a modelt 
}



module.exports = addRoutes; //exprotalni tudjuk a modult ezzel